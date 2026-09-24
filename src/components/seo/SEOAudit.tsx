import { useState, useMemo, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Eye,
  Filter,
  Globe,
  HelpCircle,
  Image as ImageIcon,
  Link2,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { KNOWN_PAGES_REGISTRY, SITE_BASE_URL, type PageSEOConfig } from "@/data/seo-registry";

export interface PageAuditResult {
  page: PageSEOConfig;
  score: number;
  status: "pass" | "warning" | "critical";
  issues: {
    critical: string[];
    warning: string[];
    passed: string[];
  };
  metrics: {
    titleLength: number;
    descriptionLength: number;
    hasCanonical: boolean;
    hasOgImage: boolean;
    hasOgTitle: boolean;
    hasOgDescription: boolean;
    hasTwitterCard: boolean;
    hasJsonLd: boolean;
  };
}

export interface LiveDOMAudit {
  url: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  twitterCard: string;
  hasJsonLd: boolean;
  jsonLdCount: number;
  issues: {
    critical: string[];
    warning: string[];
    passed: string[];
  };
}

export function auditPage(config: PageSEOConfig): PageAuditResult {
  const critical: string[] = [];
  const warning: string[] = [];
  const passed: string[] = [];

  // 1. Title verification
  const title = config.title?.trim() || "";
  const titleLen = title.length;
  if (!title) {
    critical.push("Missing <title> tag");
  } else if (titleLen < 30) {
    warning.push(`Title is too short (${titleLen} chars). Recommended: 35–60 chars`);
  } else if (titleLen > 65) {
    warning.push(`Title may truncate on Google (${titleLen} chars). Recommended: 35–60 chars`);
  } else {
    passed.push(`Title length optimal (${titleLen} chars)`);
  }

  if (title && !title.toLowerCase().includes("mana trips")) {
    warning.push("Missing brand identifier ('Mana Trips') in title tag");
  } else if (title) {
    passed.push("Branded with 'Mana Trips'");
  }

  // 2. Meta Description verification
  const desc = config.description?.trim() || "";
  const descLen = desc.length;
  if (!desc) {
    critical.push('Missing <meta name="description"> tag');
  } else if (descLen < 110) {
    warning.push(`Meta description too short (${descLen} chars). Recommended: 120–160 chars`);
  } else if (descLen > 165) {
    warning.push(
      `Meta description may truncate in search snippets (${descLen} chars). Recommended: 120–160 chars`,
    );
  } else {
    passed.push(`Meta description length optimal (${descLen} chars)`);
  }

  // 3. Canonical URL verification
  const canonical = config.canonicalUrl?.trim() || "";
  if (!canonical) {
    critical.push('Missing canonical URL (<link rel="canonical">)');
  } else if (!canonical.startsWith("http://") && !canonical.startsWith("https://")) {
    critical.push("Canonical URL must be an absolute URL starting with https://");
  } else {
    passed.push("Absolute canonical URL configured");
  }

  // 4. Open Graph Image verification
  const ogImage = config.ogImage?.trim() || "";
  if (!ogImage) {
    critical.push('Missing Open Graph image (<meta property="og:image">)');
  } else if (!ogImage.startsWith("http://") && !ogImage.startsWith("https://")) {
    warning.push("Open Graph image should ideally be an absolute URL for social crawlers");
  } else {
    passed.push("Open Graph share image configured");
  }

  // 5. Open Graph Meta verification
  if (!config.ogTitle?.trim()) {
    warning.push('Missing <meta property="og:title">');
  } else {
    passed.push("og:title configured");
  }

  if (!config.ogDescription?.trim()) {
    warning.push('Missing <meta property="og:description">');
  } else {
    passed.push("og:description configured");
  }

  // 6. Twitter Card verification
  if (!config.twitterCard) {
    warning.push('Missing <meta name="twitter:card"> definition');
  } else {
    passed.push(`Twitter card format: ${config.twitterCard}`);
  }

  // 7. Structured Data
  if (config.hasJsonLd) {
    passed.push("Schema.org JSON-LD structured data included");
  } else if (["Core", "Catalog", "Destination"].includes(config.category)) {
    warning.push(
      "Recommended to add Schema.org structured data (e.g. TourPackage, Place, TravelAgency)",
    );
  }

  // Calculate score (0-100)
  let score = 100;
  score -= critical.length * 20;
  score -= warning.length * 6;
  score = Math.max(0, Math.min(100, score));

  let status: "pass" | "warning" | "critical" = "pass";
  if (critical.length > 0) {
    status = "critical";
  } else if (warning.length > 0 || score < 90) {
    status = "warning";
  }

  return {
    page: config,
    score,
    status,
    issues: { critical, warning, passed },
    metrics: {
      titleLength: titleLen,
      descriptionLength: descLen,
      hasCanonical: !!canonical,
      hasOgImage: !!ogImage,
      hasOgTitle: !!config.ogTitle,
      hasOgDescription: !!config.ogDescription,
      hasTwitterCard: !!config.twitterCard,
      hasJsonLd: !!config.hasJsonLd,
    },
  };
}

export function scanLiveDocumentHead(): LiveDOMAudit {
  if (typeof document === "undefined") {
    return {
      url: "",
      title: "",
      description: "",
      canonical: "",
      ogImage: "",
      ogTitle: "",
      ogDescription: "",
      ogType: "",
      twitterCard: "",
      hasJsonLd: false,
      jsonLdCount: 0,
      issues: { critical: [], warning: [], passed: [] },
    };
  }

  const url = window.location.href;
  const title = document.title || "";
  const description =
    document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
  const ogImage =
    document.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
  const ogTitle =
    document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
  const ogDescription =
    document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";
  const ogType = document.querySelector('meta[property="og:type"]')?.getAttribute("content") || "";
  const twitterCard =
    document.querySelector('meta[name="twitter:card"]')?.getAttribute("content") || "";
  const jsonLdElements = document.querySelectorAll('script[type="application/ld+json"]');

  const critical: string[] = [];
  const warning: string[] = [];
  const passed: string[] = [];

  if (!title) critical.push("Live DOM: Missing document.title");
  else passed.push(`Live title: "${title.slice(0, 45)}..." (${title.length} chars)`);

  if (!description) critical.push('Live DOM: Missing <meta name="description">');
  else passed.push(`Live description present (${description.length} chars)`);

  if (!canonical) critical.push('Live DOM: Missing <link rel="canonical">');
  else passed.push(`Live canonical URL: ${canonical}`);

  if (!ogImage) critical.push('Live DOM: Missing <meta property="og:image">');
  else passed.push(`Live og:image: ${ogImage}`);

  if (!ogTitle) warning.push('Live DOM: Missing <meta property="og:title">');
  else passed.push("Live og:title present");

  if (!ogDescription) warning.push('Live DOM: Missing <meta property="og:description">');
  else passed.push("Live og:description present");

  if (!twitterCard) warning.push('Live DOM: Missing <meta name="twitter:card">');
  else passed.push(`Live twitter:card: ${twitterCard}`);

  if (jsonLdElements.length === 0)
    warning.push("Live DOM: No Schema.org JSON-LD found in document");
  else passed.push(`Live Schema.org JSON-LD found (${jsonLdElements.length} block)`);

  return {
    url,
    title,
    description,
    canonical,
    ogImage,
    ogTitle,
    ogDescription,
    ogType,
    twitterCard,
    hasJsonLd: jsonLdElements.length > 0,
    jsonLdCount: jsonLdElements.length,
    issues: { critical, warning, passed },
  };
}

export function SEOAudit() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<
    "all" | "issues" | "missing-canonical" | "missing-og-image" | "missing-meta" | "passed"
  >("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"catalog" | "live" | "preview">("catalog");
  const [expandedPage, setExpandedPage] = useState<string | null>(null);
  const [previewPagePath, setPreviewPagePath] = useState<string>("/");
  const [isScanning, setIsScanning] = useState(false);
  const [liveDOM, setLiveDOM] = useState<LiveDOMAudit | null>(null);

  // Run audit across all registered pages
  const auditResults = useMemo(() => {
    return KNOWN_PAGES_REGISTRY.map((config) => auditPage(config));
  }, []);

  // Compute aggregate metrics
  const stats = useMemo(() => {
    const totalPages = auditResults.length;
    const criticalPages = auditResults.filter((r) => r.issues.critical.length > 0);
    const warningPages = auditResults.filter(
      (r) => r.issues.critical.length === 0 && r.issues.warning.length > 0,
    );
    const passedPages = auditResults.filter(
      (r) => r.issues.critical.length === 0 && r.issues.warning.length === 0,
    );

    const missingCanonicals = auditResults.filter((r) => !r.metrics.hasCanonical);
    const missingOgImages = auditResults.filter((r) => !r.metrics.hasOgImage);
    const missingMeta = auditResults.filter(
      (r) => r.metrics.titleLength === 0 || r.metrics.descriptionLength === 0,
    );

    const averageScore = Math.round(
      auditResults.reduce((acc, curr) => acc + curr.score, 0) / (totalPages || 1),
    );

    return {
      totalPages,
      criticalCount: criticalPages.length,
      warningCount: warningPages.length,
      passedCount: passedPages.length,
      missingCanonicalsCount: missingCanonicals.length,
      missingOgImagesCount: missingOgImages.length,
      missingMetaCount: missingMeta.length,
      averageScore,
    };
  }, [auditResults]);

  // Scan live DOM on mount or refresh
  const handleScanLiveDOM = () => {
    setIsScanning(true);
    setTimeout(() => {
      const result = scanLiveDocumentHead();
      setLiveDOM(result);
      setIsScanning(false);
      toast.success("Live DOM head re-scanned successfully!");
    }, 450);
  };

  useEffect(() => {
    setLiveDOM(scanLiveDocumentHead());
  }, []);

  // Filter and search
  const filteredResults = useMemo(() => {
    return auditResults.filter((res) => {
      const matchesSearch =
        res.page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.page.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.page.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "all" || res.page.category === selectedCategory;

      let matchesFilter = true;
      if (filterType === "issues") {
        matchesFilter = res.status !== "pass";
      } else if (filterType === "missing-canonical") {
        matchesFilter = !res.metrics.hasCanonical;
      } else if (filterType === "missing-og-image") {
        matchesFilter = !res.metrics.hasOgImage;
      } else if (filterType === "missing-meta") {
        matchesFilter = res.metrics.titleLength === 0 || res.metrics.descriptionLength === 0;
      } else if (filterType === "passed") {
        matchesFilter = res.status === "pass";
      }

      return matchesSearch && matchesCategory && matchesFilter;
    });
  }, [auditResults, searchQuery, selectedCategory, filterType]);

  // Page for simulation preview
  const previewItem = useMemo(() => {
    return KNOWN_PAGES_REGISTRY.find((p) => p.path === previewPagePath) || KNOWN_PAGES_REGISTRY[0];
  }, [previewPagePath]);

  // Copy full Markdown audit report to clipboard
  const handleCopyReport = () => {
    const markdown = `# Mana Trips — SEO Health Audit Report
Generated: ${new Date().toLocaleDateString("en-IN")} at ${new Date().toLocaleTimeString("en-IN")}
Base URL: ${SITE_BASE_URL}

## Executive Summary
- **Overall Health Score**: ${stats.averageScore}/100
- **Total Pages Audited**: ${stats.totalPages}
- **Fully Compliant**: ${stats.passedCount}
- **Pages with Warnings**: ${stats.warningCount}
- **Pages with Critical Issues**: ${stats.criticalCount}
- **Missing Canonical URLs**: ${stats.missingCanonicalsCount}
- **Missing Open Graph Images**: ${stats.missingOgImagesCount}
- **Missing Meta Tags**: ${stats.missingMetaCount}

## Detailed Page Breakdown
${auditResults
  .map(
    (r) => `
### ${r.page.name} (\`${r.page.path}\`)
- **Score**: ${r.score}% (${r.status.toUpperCase()})
- **Title**: "${r.page.title}" (${r.metrics.titleLength} chars)
- **Description**: "${r.page.description.slice(0, 80)}..." (${r.metrics.descriptionLength} chars)
- **Canonical**: ${r.page.canonicalUrl || "MISSING"}
- **OG Image**: ${r.page.ogImage || "MISSING"}
${r.issues.critical.length > 0 ? `- **Critical Issues**:\n${r.issues.critical.map((c) => `  - ❌ ${c}`).join("\n")}` : ""}
${r.issues.warning.length > 0 ? `- **Warnings**:\n${r.issues.warning.map((w) => `  - ⚠️ ${w}`).join("\n")}` : ""}
`,
  )
  .join("\n")}
`;

    navigator.clipboard.writeText(markdown);
    toast.success("SEO Audit markdown report copied to clipboard!");
  };

  // Export JSON Report
  const handleExportJSON = () => {
    const data = {
      timestamp: new Date().toISOString(),
      site: "Mana Trips (Hyderabad, India)",
      baseUrl: SITE_BASE_URL,
      summary: stats,
      pages: auditResults,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mana-trips-seo-audit-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("SEO Audit JSON downloaded!");
  };

  // Score badge helper
  const getScoreColor = (score: number) => {
    if (score >= 90)
      return "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800";
    if (score >= 75)
      return "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800";
    return "text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-800";
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Banner / Headline */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950/50">
              <Zap className="size-5" />
            </span>
            <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Mana Trips SEO Health & Metadata Audit
            </h2>
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
            Auditing 24 core routes for missing meta tags, canonical URLs, and Open Graph social
            sharing images.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={handleScanLiveDOM}
            disabled={isScanning}
            variant="outline"
            size="sm"
            className="h-9 gap-1.5 text-xs font-semibold"
          >
            <RefreshCw className={`size-3.5 ${isScanning ? "animate-spin" : ""}`} />
            {isScanning ? "Scanning DOM…" : "Live Head Scan"}
          </Button>
          <Button
            onClick={handleCopyReport}
            variant="outline"
            size="sm"
            className="h-9 gap-1.5 text-xs font-semibold"
          >
            <Copy className="size-3.5" />
            Copy Report
          </Button>
          <Button
            onClick={handleExportJSON}
            size="sm"
            className="h-9 gap-1.5 bg-orange-600 text-xs font-bold text-white hover:bg-orange-700"
          >
            <Download className="size-3.5" />
            Export JSON
          </Button>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Overall Score */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Overall SEO Score
            </span>
            <ShieldCheck className="size-4 text-orange-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span
              className={`inline-flex items-center rounded-lg border px-3 py-1 text-3xl font-extrabold tracking-tight ${getScoreColor(
                stats.averageScore,
              )}`}
            >
              {stats.averageScore}%
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {stats.averageScore >= 90
                ? "Excellent"
                : stats.averageScore >= 75
                  ? "Needs Review"
                  : "Action Required"}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {stats.passedCount} of {stats.totalPages} pages fully optimized
          </p>
        </div>

        {/* Critical Issues */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Critical Deficits
            </span>
            <AlertCircle className="size-4 text-rose-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-foreground">{stats.criticalCount}</span>
            <span className="text-xs text-rose-600 font-semibold">
              {stats.criticalCount === 0
                ? "0 pages broken"
                : `${stats.criticalCount} pages affected`}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Missing titles, descriptions, or canonical links
          </p>
        </div>

        {/* Canonical URLs Health */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Canonical URLs
            </span>
            <Link2 className="size-4 text-blue-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-foreground">
              {stats.totalPages - stats.missingCanonicalsCount}/{stats.totalPages}
            </span>
            <span className="text-xs text-blue-600 font-semibold">
              {stats.missingCanonicalsCount === 0
                ? "100% Present"
                : `${stats.missingCanonicalsCount} Missing`}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Prevents duplicate content across search engines
          </p>
        </div>

        {/* Open Graph Images */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Open Graph Images
            </span>
            <ImageIcon className="size-4 text-emerald-600" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-foreground">
              {stats.totalPages - stats.missingOgImagesCount}/{stats.totalPages}
            </span>
            <span className="text-xs text-emerald-600 font-semibold">
              {stats.missingOgImagesCount === 0
                ? "100% Covered"
                : `${stats.missingOgImagesCount} Missing`}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Enables high-CTR social cards on WhatsApp & X
          </p>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as "catalog" | "live" | "preview")}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 max-w-md h-10">
          <TabsTrigger value="catalog" className="text-xs font-bold">
            All Pages Audit ({auditResults.length})
          </TabsTrigger>
          <TabsTrigger value="live" className="text-xs font-bold">
            Live DOM Head
          </TabsTrigger>
          <TabsTrigger value="preview" className="text-xs font-bold">
            SERP & Social Preview
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: ALL PAGES CATALOG AUDIT */}
        <TabsContent value="catalog" className="space-y-4 pt-2">
          {/* Controls & Filter Bar */}
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-xs md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search page name, route path, or title keywords…"
                className="h-9 pl-9 text-xs"
              />
            </div>

            {/* Quick Filter Badges */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => setFilterType("all")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  filterType === "all"
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                All ({auditResults.length})
              </button>
              <button
                onClick={() => setFilterType("issues")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  filterType === "issues"
                    ? "bg-rose-600 text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Needs Review ({stats.criticalCount + stats.warningCount})
              </button>
              <button
                onClick={() => setFilterType("missing-canonical")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  filterType === "missing-canonical"
                    ? "bg-blue-600 text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Missing Canonical ({stats.missingCanonicalsCount})
              </button>
              <button
                onClick={() => setFilterType("missing-og-image")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  filterType === "missing-og-image"
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Missing OG Image ({stats.missingOgImagesCount})
              </button>
              <button
                onClick={() => setFilterType("passed")}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  filterType === "passed"
                    ? "bg-emerald-700 text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                Passed ({stats.passedCount})
              </button>
            </div>
          </div>

          {/* Table / List of audited pages */}
          <div className="divide-y divide-border rounded-xl border border-border bg-card shadow-xs">
            {filteredResults.length === 0 ? (
              <div className="p-8 text-center text-xs text-muted-foreground">
                No pages match your current filters. Try changing search or category filters.
              </div>
            ) : (
              filteredResults.map((result) => {
                const isExpanded = expandedPage === result.page.path;
                return (
                  <div key={result.page.path} className="p-4 transition-colors hover:bg-muted/20">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-bold ${getScoreColor(
                              result.score,
                            )}`}
                          >
                            {result.score}%
                          </span>

                          <Badge variant="outline" className="text-[10px] font-semibold uppercase">
                            {result.page.category}
                          </Badge>

                          <span className="font-bold text-sm text-foreground">
                            {result.page.name}
                          </span>

                          <code className="rounded bg-muted px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                            {result.page.path}
                          </code>
                        </div>

                        <p className="text-xs font-medium text-foreground line-clamp-1">
                          {result.page.title}
                        </p>

                        <p className="text-[11px] text-muted-foreground line-clamp-2">
                          {result.page.description}
                        </p>

                        {/* Status Check Chips */}
                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                          {/* Title */}
                          <span
                            className={`inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 font-medium ${
                              result.metrics.titleLength >= 30 && result.metrics.titleLength <= 65
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40"
                                : "bg-amber-50 text-amber-700 dark:bg-amber-950/40"
                            }`}
                          >
                            Title: {result.metrics.titleLength}ch
                          </span>

                          {/* Description */}
                          <span
                            className={`inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 font-medium ${
                              result.metrics.descriptionLength >= 110 &&
                              result.metrics.descriptionLength <= 165
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40"
                                : "bg-amber-50 text-amber-700 dark:bg-amber-950/40"
                            }`}
                          >
                            Desc: {result.metrics.descriptionLength}ch
                          </span>

                          {/* Canonical */}
                          <span
                            className={`inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 font-medium ${
                              result.metrics.hasCanonical
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40"
                                : "bg-rose-50 text-rose-700 dark:bg-rose-950/40"
                            }`}
                          >
                            {result.metrics.hasCanonical ? "Canonical: OK" : "Canonical: Missing"}
                          </span>

                          {/* OG Image */}
                          <span
                            className={`inline-flex items-center gap-1 rounded-sm px-1.5 py-0.5 font-medium ${
                              result.metrics.hasOgImage
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40"
                                : "bg-rose-50 text-rose-700 dark:bg-rose-950/40"
                            }`}
                          >
                            {result.metrics.hasOgImage ? "OG Image: OK" : "OG Image: Missing"}
                          </span>

                          {/* JSON-LD */}
                          {result.metrics.hasJsonLd && (
                            <span className="rounded-sm bg-purple-50 px-1.5 py-0.5 font-medium text-purple-700 dark:bg-purple-950/40">
                              Schema.org JSON-LD
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setPreviewPagePath(result.page.path);
                            setActiveTab("preview");
                          }}
                          className="h-8 text-xs font-semibold gap-1"
                        >
                          <Eye className="size-3.5" /> Preview
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedPage(isExpanded ? null : result.page.path)}
                          className="h-8 text-xs font-semibold"
                        >
                          {isExpanded ? "Hide Details" : "Audit Details"}
                        </Button>

                        <Link
                          to={result.page.path}
                          className="inline-flex size-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground"
                          title="Open live page"
                        >
                          <ExternalLink className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Expandable Diagnostic Breakdown */}
                    {isExpanded && (
                      <div className="mt-4 rounded-lg border border-border bg-muted/40 p-4 space-y-3 text-xs">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {/* Metadata Values */}
                          <div className="space-y-1.5">
                            <strong className="block text-foreground font-bold">
                              Audited Tag Values
                            </strong>
                            <div className="space-y-1 text-[11px]">
                              <div>
                                <span className="font-semibold text-muted-foreground">
                                  Canonical:{" "}
                                </span>
                                <code className="text-foreground">
                                  {result.page.canonicalUrl || "None"}
                                </code>
                              </div>
                              <div>
                                <span className="font-semibold text-muted-foreground">
                                  OG Image:{" "}
                                </span>
                                <code className="text-foreground">
                                  {result.page.ogImage || "None"}
                                </code>
                              </div>
                              <div>
                                <span className="font-semibold text-muted-foreground">
                                  OG Title:{" "}
                                </span>
                                <span>{result.page.ogTitle || "None"}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-muted-foreground">
                                  Twitter Card:{" "}
                                </span>
                                <span>{result.page.twitterCard || "None"}</span>
                              </div>
                            </div>
                          </div>

                          {/* Issues & Checks */}
                          <div className="space-y-1.5">
                            <strong className="block text-foreground font-bold">
                              Diagnostic Findings
                            </strong>
                            <div className="space-y-1 text-[11px]">
                              {result.issues.critical.map((c, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-1.5 text-rose-600 font-semibold"
                                >
                                  <AlertCircle size={12} className="shrink-0" />
                                  <span>{c}</span>
                                </div>
                              ))}
                              {result.issues.warning.map((w, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-amber-600">
                                  <AlertTriangle size={12} className="shrink-0" />
                                  <span>{w}</span>
                                </div>
                              ))}
                              {result.issues.passed.map((p, i) => (
                                <div key={i} className="flex items-center gap-1.5 text-emerald-600">
                                  <CheckCircle2 size={12} className="shrink-0" />
                                  <span>{p}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Recommendation Code snippet */}
                        <div className="pt-2 border-t border-border">
                          <span className="block font-semibold text-foreground text-[11px] mb-1">
                            TanStack Router Head Recommendation:
                          </span>
                          <pre className="overflow-x-auto rounded bg-slate-950 p-2.5 text-[11px] font-mono text-slate-200">
                            {`head: () => ({
  meta: [
    { title: "${result.page.title}" },
    { name: "description", content: "${result.page.description}" },
    { property: "og:title", content: "${result.page.ogTitle || result.page.title}" },
    { property: "og:description", content: "${result.page.ogDescription || result.page.description}" },
    { property: "og:image", content: "${result.page.ogImage}" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [
    { rel: "canonical", href: "${result.page.canonicalUrl}" }
  ]
})`}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </TabsContent>

        {/* TAB 2: LIVE DOM INSPECTION */}
        <TabsContent value="live" className="space-y-4 pt-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  Active Page Document Head Inspector
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Reads real-time DOM elements directly from{" "}
                  <code className="font-mono text-foreground">
                    {typeof window !== "undefined" ? window.location.pathname : "/"}
                  </code>
                </p>
              </div>
              <Button
                onClick={handleScanLiveDOM}
                disabled={isScanning}
                size="sm"
                className="h-8 bg-orange-600 font-bold text-white hover:bg-orange-700"
              >
                <RefreshCw className={`mr-1.5 size-3.5 ${isScanning ? "animate-spin" : ""}`} />
                Re-Scan Document Head
              </Button>
            </div>

            {liveDOM ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Live Elements Readout */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Live Head Elements
                  </h4>

                  <div className="space-y-2.5 text-xs">
                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <span className="block text-[10px] font-bold text-muted-foreground uppercase">
                        document.title ({liveDOM.title.length} characters)
                      </span>
                      <p className="mt-1 font-semibold text-foreground">
                        {liveDOM.title || "(Missing)"}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <span className="block text-[10px] font-bold text-muted-foreground uppercase">
                        meta[name="description"] ({liveDOM.description.length} characters)
                      </span>
                      <p className="mt-1 text-muted-foreground">
                        {liveDOM.description || "(Missing)"}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <span className="block text-[10px] font-bold text-muted-foreground uppercase">
                        link[rel="canonical"]
                      </span>
                      <p className="mt-1 font-mono text-xs text-foreground">
                        {liveDOM.canonical || "(Missing link canonical tag)"}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <span className="block text-[10px] font-bold text-muted-foreground uppercase">
                        meta[property="og:image"]
                      </span>
                      <p className="mt-1 font-mono text-xs text-foreground">
                        {liveDOM.ogImage || "(Missing og:image)"}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg border border-border bg-muted/30 p-2.5">
                        <span className="block text-[10px] font-bold text-muted-foreground uppercase">
                          og:type
                        </span>
                        <p className="mt-0.5 font-semibold text-foreground">
                          {liveDOM.ogType || "website"}
                        </p>
                      </div>
                      <div className="rounded-lg border border-border bg-muted/30 p-2.5">
                        <span className="block text-[10px] font-bold text-muted-foreground uppercase">
                          twitter:card
                        </span>
                        <p className="mt-0.5 font-semibold text-foreground">
                          {liveDOM.twitterCard || "None"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Analysis of Live Head */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Live Diagnostics
                  </h4>

                  <div className="rounded-lg border border-border bg-card p-4 space-y-2.5">
                    {liveDOM.issues.critical.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-rose-600 font-semibold"
                      >
                        <AlertCircle size={14} className="mt-0.5 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}

                    {liveDOM.issues.warning.map((w, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-amber-600">
                        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                        <span>{w}</span>
                      </div>
                    ))}

                    {liveDOM.issues.passed.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-emerald-600">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>

                  {/* Best Practices Note */}
                  <div className="rounded-lg border border-orange-200 bg-orange-50/70 p-3.5 text-xs text-orange-900 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-200">
                    <strong className="block font-bold">
                      Dynamic Single-Page Application (SPA) Note:
                    </strong>
                    <p className="mt-1 leading-relaxed text-[11px]">
                      TanStack Router executes route <code className="font-mono">head()</code>{" "}
                      functions when navigating between pages. For full crawler discovery (e.g.
                      WhatsApp, Facebook bots that do not run JavaScript), ensuring server-rendered
                      or static HTML tags in <code className="font-mono">index.html</code> alongside
                      dynamic route head overrides provides 100% crawler compatibility.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">
                Click Re-Scan Document Head to inspect live metadata.
              </p>
            )}
          </div>
        </TabsContent>

        {/* TAB 3: SERP & SOCIAL CARD SIMULATOR */}
        <TabsContent value="preview" className="space-y-6 pt-2">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <span className="text-xs font-bold text-foreground">Select Page to Simulate:</span>
            <select
              value={previewPagePath}
              onChange={(e) => setPreviewPagePath(e.target.value)}
              className="h-9 rounded-lg border border-border bg-background px-3 text-xs font-semibold text-foreground"
            >
              {KNOWN_PAGES_REGISTRY.map((p) => (
                <option key={p.path} value={p.path}>
                  {p.name} ({p.path})
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Google Search Result Simulator */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Globe className="size-4 text-blue-600" /> Google Search SERP Snippet
                </span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  Desktop Preview
                </span>
              </div>

              {/* Google SERP Card */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 font-sans text-left shadow-2xs dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="size-4 rounded-full bg-orange-600 text-[10px] text-white flex items-center justify-center font-bold">
                    M
                  </div>
                  <span className="font-medium">Mana Trips</span>
                  <span className="text-slate-400">›</span>
                  <span className="text-slate-500 font-mono text-[11px] truncate">
                    {previewItem.canonicalUrl.replace("https://", "")}
                  </span>
                </div>

                <h4 className="mt-1 text-base font-semibold text-blue-700 hover:underline cursor-pointer dark:text-blue-400">
                  {previewItem.title}
                </h4>

                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                  {previewItem.description}
                </p>
              </div>

              <div className="text-[11px] text-muted-foreground space-y-1 pt-1">
                <p>
                  <strong>Title Length:</strong> {previewItem.title.length}/60 chars{" "}
                  {previewItem.title.length <= 60 ? (
                    <span className="text-emerald-600">✓ Within visible bounds</span>
                  ) : (
                    <span className="text-amber-600">⚠ May truncate</span>
                  )}
                </p>
                <p>
                  <strong>Description Length:</strong> {previewItem.description.length}/160 chars{" "}
                  {previewItem.description.length >= 110 &&
                  previewItem.description.length <= 160 ? (
                    <span className="text-emerald-600">✓ Ideal length</span>
                  ) : (
                    <span className="text-amber-600">⚠ Check snippet length</span>
                  )}
                </p>
              </div>
            </div>

            {/* Social Share Card (Open Graph / WhatsApp / X / LinkedIn) */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Share2 className="size-4 text-emerald-600" /> Open Graph Social Card
                </span>
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  WhatsApp / Twitter Preview
                </span>
              </div>

              {/* Social Card */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
                <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {previewItem.ogImage ? (
                    <img
                      src={previewItem.ogImage}
                      alt={previewItem.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                      No Open Graph Image Configured
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 rounded bg-slate-950/80 px-2 py-0.5 text-[10px] font-bold text-white">
                    1200 × 630 OG Standard
                  </span>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                    MANATRIPS.IN
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-foreground line-clamp-1">
                    {previewItem.ogTitle || previewItem.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {previewItem.ogDescription || previewItem.description}
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-muted-foreground space-y-1 pt-1">
                <p>
                  <strong>OG Image Status:</strong>{" "}
                  {previewItem.ogImage ? (
                    <span className="text-emerald-600">✓ High-res share asset linked</span>
                  ) : (
                    <span className="text-rose-600 font-bold">❌ Missing OG Image</span>
                  )}
                </p>
                <p>
                  <strong>Card Type:</strong> {previewItem.twitterCard || "summary_large_image"}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default SEOAudit;
