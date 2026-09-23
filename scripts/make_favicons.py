import struct
import zlib
import os

def create_png(width, height, draw_fn, filepath):
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0) # filter type none
        for x in range(width):
            r, g, b, a = draw_fn(x, y, width, height)
            raw_data.extend([r, g, b, a])
    
    def chunk(chunk_type, data):
        c = chunk_type + data
        crc = zlib.crc32(c) & 0xffffffff
        return struct.pack(">I", len(data)) + c + struct.pack(">I", crc)

    ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    idat = zlib.compress(bytes(raw_data), 9)

    png_bytes = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + chunk(b"IDAT", idat) + chunk(b"IEND", b"")
    with open(filepath, "wb") as f:
        f.write(png_bytes)

def mana_pixel(x, y, w, h):
    # Normalized coordinates 0..1
    nx = x / float(w)
    ny = y / float(h)
    
    # Rounded badge background
    r_corner = 0.22
    dx = max(0, abs(nx - 0.5) - (0.5 - r_corner))
    dy = max(0, abs(ny - 0.5) - (0.5 - r_corner))
    dist_sq = dx*dx + dy*dy
    if dist_sq > r_corner*r_corner:
        return (0, 0, 0, 0) # transparent outer
        
    # Deep Navy gradient background
    bg_r = int(15 + 15 * ny)
    bg_g = int(23 + 18 * ny)
    bg_b = int(42 + 20 * ny)
    
    # Golden Sun: center (0.5, 0.35), radius 0.16
    sun_dx = nx - 0.5
    sun_dy = ny - 0.35
    if sun_dx*sun_dx + sun_dy*sun_dy <= 0.16*0.16:
        return (245, 158, 11, 255) # Amber gold sun
        
    # Mountain Peak 1 (Left / Back - Tangerine Orange)
    # Apex at (0.42, 0.40), base line 0.78, left base 0.18, right base 0.70
    if ny >= 0.40 and ny <= 0.78:
        left_bound = 0.42 - (ny - 0.40) * (0.42 - 0.18) / 0.38
        right_bound = 0.42 + (ny - 0.40) * (0.70 - 0.42) / 0.38
        if nx >= left_bound and nx <= right_bound:
            # Snowcap
            if ny < 0.46:
                return (250, 247, 242, 255)
            return (234, 88, 12, 255) # Deep Orange
            
    # Mountain Peak 2 (Right / Front - Vibrant Sunset Orange with 'M' peak)
    # Apex at (0.58, 0.48), base line 0.78, left 0.32, right 0.84
    if ny >= 0.48 and ny <= 0.78:
        left_bound = 0.58 - (ny - 0.48) * (0.58 - 0.32) / 0.30
        right_bound = 0.58 + (ny - 0.48) * (0.84 - 0.58) / 0.30
        if nx >= left_bound and nx <= right_bound:
            if ny < 0.54:
                return (255, 255, 255, 255)
            return (249, 115, 22, 255) # Vibrant Orange
            
    # Base trail highlight line
    if ny >= 0.77 and ny <= 0.81 and nx >= 0.16 and nx <= 0.84:
        return (241, 245, 249, 255)

    return (bg_r, bg_g, bg_b, 255)

os.makedirs("public", exist_ok=True)
create_png(64, 64, mana_pixel, "public/favicon.png")
create_png(32, 32, mana_pixel, "public/favicon-32x32.png")
create_png(16, 16, mana_pixel, "public/favicon-16x16.png")
create_png(180, 180, mana_pixel, "public/apple-touch-icon.png")
# favicon.ico can be a 32x32 png in modern browsers or wrapped
create_png(32, 32, mana_pixel, "public/favicon.ico")
print("Favicons generated successfully!")
