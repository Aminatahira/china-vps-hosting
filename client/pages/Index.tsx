import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  Globe,
  Mail,
  Clock,
  Shield,
  BarChart3,
  Users,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a
                href="https://arzhost.com/"
                className="text-xl font-bold text-foreground"
              >
                ARZ Host
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                className="text-foreground hover:text-primary transition-colors"
              >
                VPS Hosting China
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-foreground hover:text-primary transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                VPS Hosting China
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                VPS Hosting China
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
                Accelerate Growth. Stay Local. Scale with Confidence.
              </p>
            </div>
            <div className="space-y-4 max-w-[900px] mx-auto">
              <p className="text-muted-foreground text-lg">
                Host your projects in or near Mainland China with our{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-primary hover:underline font-medium"
                >
                  VPS solutions
                </a>{" "}
                designed for speed, reliability, and email functionality.
                Whether you're launching a business, serving APAC clients, or
                scaling a platform, these plans provide the infrastructure and
                flexibility you need—instantly and hassle-free.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Globe size={16} />
                  China-Friendly Network
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Mail size={16} />
                  Email Capable (Port 25 Open)
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Clock size={16} />
                  Instant Deployment
                </Badge>
              </div>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://arzhost.com/vps/">Choose Your Plan</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.arzhost.com/contact-us/">
                  Talk to a Hosting Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                VPS Hosting Plans & Pricing
              </h2>
              <p className="text-muted-foreground max-w-[900px] mx-auto text-lg">
                Our China-focused{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Virtual_private_server"
                  target="_blank"
                  rel="noopener"
                  className="text-primary hover:underline"
                >
                  VPS plans
                </a>{" "}
                deliver excellent value—transparent pricing, instant setup,
                scaling options, and email-ready capabilities
              </p>
            </div>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Starter VPS */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Starter VPS</CardTitle>
                <CardDescription>
                  Perfect for personal projects, testing, or entry-level web
                  apps
                </CardDescription>
                <div className="text-3xl font-bold text-primary">
                  $12.50
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="https://arzhost.com/vps/">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Value VPS */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Value VPS</CardTitle>
                <CardDescription>
                  Ideal for small businesses and growing websites needing
                  dependable uptime
                </CardDescription>
                <div className="text-3xl font-bold text-primary">
                  $16.00
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="https://arzhost.com/vps/">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Essential VPS */}
            <Card className="relative border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Essential VPS</CardTitle>
                <CardDescription>
                  A strong option for serious online platforms and client
                  systems
                </CardDescription>
                <div className="text-3xl font-bold text-primary">
                  $34.00
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="https://arzhost.com/vps/">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort VPS */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Comfort VPS</CardTitle>
                <CardDescription>
                  Designed for stable operations, high traffic, or
                  professional-grade workloads
                </CardDescription>
                <div className="text-3xl font-bold text-primary">
                  $54.00
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="https://arzhost.com/vps/">Order Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Elite VPS */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Elite VPS</CardTitle>
                <CardDescription>
                  Tailored for enterprises, high-demand services, and
                  mission-critical applications
                </CardDescription>
                <div className="text-3xl font-bold text-primary">
                  $60.00
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="https://arzhost.com/vps/">Order Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All plans include email support, quick activation, and
              strategically located servers near China.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Why Choose Our China VPS?
              </h2>
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Faster Connections Inside China</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hosting geographically near Mainland China means quicker
                  access for your users—crucial for speed and retention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Send Emails with No Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With Port 25 enabled, you can run your own email servers,
                  alert systems, or newsletters effortlessly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Ready-to-Go in Minutes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete setup post-purchase—no wait times or manual
                  provisioning needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Grow on Your Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Easily upgrade plans to match your traffic, audience size, or
                  business demands—no data loss, no downtime.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Dependable, Always-On Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strong connectivity, reliable availability, and seamless user
                  experiences every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Complete Control Over Your Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolute freedom to install, configure, and manage your setup
                  as you see fit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                What You Get with Every Plan
              </h2>
            </div>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-3">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">
                  DDoS Protection & Stable Network
                </h3>
                <p className="text-muted-foreground">
                  Safeguards in place to handle traffic spikes or unwanted
                  threats—so you stay online.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">
                  Unlimited Data Transfers
                </h3>
                <p className="text-muted-foreground">
                  Move files, host content, or stream freely—no billing
                  surprises.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">
                  24/7 Expert Support
                </h3>
                <p className="text-muted-foreground">
                  Assistance anytime you need, with a team trained for
                  China-based hosting.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">
                  Complete Control Over Your Environment
                </h3>
                <p className="text-muted-foreground">
                  Absolute freedom to install, configure, and manage your setup
                  as you see fit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">
                  Global Access & Performance
                </h3>
                <p className="text-muted-foreground">
                  Superior connection speeds not just in Asia, but from any
                  region worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Who Benefits Most?
              </h2>
            </div>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Startups & Small Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building their brand in China or APAC markets
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Developers & Agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hosting client demos, tests, or production setups
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  eCommerce Sites & Content Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Looking for low-latency performance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Email-Driven Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sending transactional, marketing, or system emails
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Global Companies Expanding in Asia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Needing reliable regional hosting
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                What Customers Say
              </h2>
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground mb-4">
                  "Great email support and fast deployment. Ideal for our small
                  biz."
                </blockquote>
                <cite className="text-sm font-medium text-foreground">
                  — Lina, Beijing
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground mb-4">
                  "Consistent speed in China and responsive customer service."
                </blockquote>
                <cite className="text-sm font-medium text-foreground">
                  — Raj, Mumbai
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground mb-4">
                  "Our team ran 24/7 services in Asia with no downtime—highly
                  recommend!"
                </blockquote>
                <cite className="text-sm font-medium text-foreground">
                  — Emily, Singapore
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Will my VPS be ready immediately?
              </h3>
              <p className="text-muted-foreground">
                Yes — your server is live in minutes after payment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Can I use it to send emails?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. Every plan comes with Port 25 enabled.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Can I upgrade later?
              </h3>
              <p className="text-muted-foreground">
                Yes — scalability is seamless, with no service interruptions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Is it accessible globally?
              </h3>
              <p className="text-muted-foreground">
                Yes — hosted in Hong Kong/China but accessible anywhere.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-foreground mb-2">
                Can I host multiple apps or sites?
              </h3>
              <p className="text-muted-foreground">
                Yes — you're free to configure your VPS for multiple projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Ready to Deploy VPS Hosting in China?
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
                Tap into fast, email-ready{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-primary hover:underline font-medium"
                >
                  VPS hosting
                </a>{" "}
                that's purpose-built for China-based business needs—without the
                technical hassles.
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://arzhost.com/vps/">
                  Choose Your Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.arzhost.com/contact-us/">
                  Talk to a Hosting Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                ARZ Host
              </h3>
              <p className="text-muted-foreground text-sm">
                Professional VPS hosting solutions designed for China and APAC
                markets.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Website:{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Phone:{" "}
                  <a
                    href="tel:+16315948060"
                    className="text-primary hover:underline"
                  >
                    +1 (631) 594-8060
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Hosting Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    VPS Hosting China
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    VPS Region
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our hosting services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ARZ Host. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Professional VPS hosting Hong Kong solutions for global
              businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
