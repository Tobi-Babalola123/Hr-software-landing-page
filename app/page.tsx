import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Users, FileText, BarChart3 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg" />
              <span className="font-semibold text-lg">TalentFlow</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Product
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Solutions
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Resources
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
              Get started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              The future-ready HR platform
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Streamline recruiting and onboarding. Empower your teams with modern HR tools built for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                Start free trial
              </Button>
              <Button size="lg" variant="outline">
                Watch demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
              <img
                src="/hr-platform-dashboard-illustration.jpg"
                alt="HR Platform"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Talent Sourcing Section */}
      <section className="bg-teal-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 text-balance">A complete talent sourcing solution</h2>
            <p className="text-xl text-teal-50 leading-relaxed">
              Find, attract, and hire the best candidates with powerful recruiting tools
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img
              src="/recruiting-dashboard-interface-with-candidate-prof.jpg"
              alt="Recruiting Dashboard"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Source top talent</h3>
              <p className="text-foreground/70 leading-relaxed">
                Access millions of candidates and post jobs to 200+ job boards with one click
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Streamline workflows</h3>
              <p className="text-foreground/70 leading-relaxed">
                Automate repetitive tasks and focus on what matters - finding great people
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make data-driven decisions</h3>
              <p className="text-foreground/70 leading-relaxed">
                Get insights into your hiring pipeline with comprehensive analytics
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comprehensive Platform Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">A comprehensive recruiting platform</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Everything you need to manage your entire hiring process from job posting to offer acceptance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Post jobs to multiple boards simultaneously</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Collaborate with your team in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Automated candidate screening and ranking</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src="/job-posting-interface-with-form-fields.jpg" alt="Job Posting" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee System Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">A flexible employee system</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Manage your workforce with powerful people management tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Employee profiles</h3>
                <p className="text-slate-300">Keep all employee information organized and accessible</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Time tracking</h3>
                <p className="text-slate-300">Monitor attendance and manage time off requests</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Performance reviews</h3>
                <p className="text-slate-300">Conduct regular reviews and track employee growth</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Document management</h3>
                <p className="text-slate-300">Store and share important files securely</p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-slate-800 rounded-2xl overflow-hidden">
            <img src="/employee-management-dashboard-interface.jpg" alt="Employee Management" className="w-full" />
          </div>
        </div>
      </section>

      {/* Time Tracking Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <img
                src="/time-tracking-interface-with-calendar-and-hours.jpg"
                alt="Time Tracking"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Time Tracking</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">An easy way to track time and attendance</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Simple tools for employees to clock in and out, request time off, and view their schedules.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-teal-600" />
                <span>Mobile-friendly time clock</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-teal-600" />
                <span>Automated timesheets</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-teal-600" />
                <span>PTO management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Growing Businesses Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Built for fast-growing businesses</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Scale your recruiting and HR operations as your company grows.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Custom workflows</h3>
                    <p className="text-foreground/70">Adapt the platform to your unique processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Integrations</h3>
                    <p className="text-foreground/70">Connect with your favorite tools</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src="/workflow-automation-interface.png" alt="Workflows" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by thousands of businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">80,000+</div>
              <div className="text-teal-200">Companies hiring</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">27M+</div>
              <div className="text-teal-200">Candidates sourced</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">130+</div>
              <div className="text-teal-200">Countries worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-balance">Our site uses HR software</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">Built for the way modern teams work</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Recruitment tools</h3>
                <p className="text-foreground/70 mb-4">
                  Post jobs, screen candidates, and manage your entire hiring pipeline in one place.
                </p>
                <Button variant="link" className="text-teal-600 p-0">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Employee management</h3>
                <p className="text-foreground/70 mb-4">
                  Streamline onboarding, time tracking, and performance reviews.
                </p>
                <Button variant="link" className="text-teal-600 p-0">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-balance">Ready to transform your hiring?</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using our platform to build amazing teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Start free trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-600 bg-transparent">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-teal-600 rounded-lg" />
                <span className="font-semibold text-lg">TalentFlow</span>
              </div>
              <p className="text-slate-400 text-sm">The all-in-one recruiting and HR platform</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Recruiting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    HR Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 TalentFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
