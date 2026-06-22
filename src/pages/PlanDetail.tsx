import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Headphones,
  Shield,
  MessageCircle,
  Sparkles,
  Rocket,
  Crown,
  Zap,
  Users,
  Code2,
  Globe,
  ShoppingBag,
  Search,
  Bot,
  Database,
  Cloud,
  Network,
  FileText,
  Bug,
  ArrowRight,
} from 'lucide-react';

const planData: Record<string, {
  name: string;
  price: string;
  icon: any;
  iconColor: string;
  bgColor: string;
  description: string;
  features: string[];
  benefits: string[];
  delivery: string;
  support: string;
  warranty: string;
}> = {
  basic: {
    name: 'Basic Plan',
    price: 'PKR 15,000 – 25,000',
    icon: Sparkles,
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    description: 'Perfect for startups and small businesses looking to establish their online presence.',
    features: [
      'Core service delivery',
      'Basic email support',
      '1 month warranty',
      'Standard delivery (15-20 days)',
      '1 round of revisions',
      'Basic documentation',
      'Responsive design',
      'SEO basics',
    ],
    benefits: [
      'Cost-effective solution',
      'Professional quality',
      'Timely delivery',
      'Great for testing',
    ],
    delivery: '15-20 days',
    support: 'Email Support',
    warranty: '1 month',
  },
  standard: {
    name: 'Standard Plan',
    price: 'PKR 30,000 – 50,000',
    icon: Rocket,
    iconColor: 'text-cyan',
    bgColor: 'bg-cyan/20',
    description: 'Best for growing businesses that need more features and priority support.',
    features: [
      'Core + extra features',
      '24/7 priority support',
      '3 months warranty',
      'Fast delivery (7-10 days)',
      '3 rounds of revisions',
      'Complete documentation',
      'Performance optimization',
      'Mobile optimization',
      'SEO optimization',
      'Social media integration',
    ],
    benefits: [
      'Best value for money',
      'Priority support',
      'Faster delivery',
      'More features included',
    ],
    delivery: '7-10 days',
    support: '24/7 Priority Support',
    warranty: '3 months',
  },
  premium: {
    name: 'Premium Plan',
    price: 'PKR 60,000 – 100,000',
    icon: Crown,
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    description: 'For enterprises and large projects requiring complete solutions with dedicated support.',
    features: [
      'Complete solution delivery',
      '24/7 dedicated support',
      '6 months warranty',
      'Express delivery (3-5 days)',
      'Unlimited revisions',
      'Complete documentation + training',
      'Performance + security optimization',
      'Mobile + SEO optimization',
      'Priority feature requests',
      'Dedicated project manager',
      'Advanced analytics setup',
      'Custom integrations',
    ],
    benefits: [
      'Dedicated team',
      'Fastest delivery',
      'Longest warranty',
      'Unlimited revisions',
      'Best for large projects',
    ],
    delivery: '3-5 days',
    support: '24/7 Dedicated Support',
    warranty: '6 months',
  },
};

export default function PlanDetail() {
  const { planId } = useParams<{ planId: string }>();
  const plan = planData[planId as keyof typeof planData];

  if (!plan) {
    return (
      <div className="pt-32 text-center min-h-screen bg-navy-dark">
        <h1 className="text-2xl font-bold text-white">Plan not found</h1>
        <Link to="/services" className="text-cyan hover:underline mt-4 inline-block">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const Icon = plan.icon;

  return (
    <div className="pt-24 min-h-screen bg-navy-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/services#pricing"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Pricing
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Plan Header */}
            <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl ${plan.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${plan.iconColor}`} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{plan.name}</h1>
                  <p className="text-cyan text-2xl font-bold">{plan.price}</p>
                </div>
              </div>
              <p className="text-white/60 text-lg">{plan.description}</p>
            </div>

            {/* Features */}
            <div className="bg-navy-light/30 border border-white/5 rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan" />
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-white/70">
                    <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-navy-light/30 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">ℹ️ Quick Info</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="w-4 h-4 text-cyan" />
                  <div>
                    <p className="text-white/40 text-xs">Delivery Time</p>
                    <p className="text-white">{plan.delivery}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Headphones className="w-4 h-4 text-cyan" />
                  <div>
                    <p className="text-white/40 text-xs">Support</p>
                    <p className="text-white">{plan.support}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Shield className="w-4 h-4 text-cyan" />
                  <div>
                    <p className="text-white/40 text-xs">Warranty</p>
                    <p className="text-white">{plan.warranty}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-navy-light/30 border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">✨ Why Choose This</h2>
              <ul className="space-y-2">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="text-cyan text-lg">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan/10 to-blue-500/10 border border-cyan/20 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Ready to Start?</h3>
              <p className="text-white/40 text-sm mb-4">
                Get a free quote today
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-cyan text-navy font-bold rounded-xl hover:bg-cyan-light transition-all duration-200 hover:shadow-lg hover:shadow-cyan/25 text-sm"
              >
                <MessageCircle size={16} />
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <h2 className="text-xl font-bold mb-6 text-center">🚀 Other Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Web Development', icon: Globe, link: '/services' },
              { name: 'SEO Optimization', icon: Search, link: '/services' },
              { name: 'Python Automation', icon: Zap, link: '/services' },
              { name: 'Shopify Stores', icon: ShoppingBag, link: '/services' },
            ].map((service) => {
              const SIcon = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.link}
                  className="bg-navy-light/30 border border-white/5 rounded-xl p-4 text-center hover:border-cyan/20 transition-all hover:-translate-y-0.5"
                >
                  <SIcon className="w-6 h-6 text-cyan mx-auto mb-2" />
                  <span className="text-sm text-white/60">{service.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}