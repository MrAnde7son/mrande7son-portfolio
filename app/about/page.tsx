import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Itamar Mizrahi',
  description: 'Learn more about Itamar Mizrahi\'s journey in cybersecurity, from founding Cymptom to leading product growth at Tenable. Cybersecurity entrepreneur and VP Product Growth.',
  keywords: [
    'Itamar Mizrahi about',
    'cybersecurity entrepreneur',
    'Cymptom founder',
    'Tenable VP Product Growth',
    'cybersecurity leadership',
    'attack path validation',
    'security product development'
  ],
  openGraph: {
    title: 'About Itamar Mizrahi - Cybersecurity Entrepreneur & VP Product Growth',
    description: 'Discover the journey of Itamar Mizrahi from founding Cymptom to leading product growth at Tenable. Expert in cybersecurity, attack path validation, and security product development.',
  },
}

export default function About() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tighter mb-6">👨‍💻 About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="flex-shrink-0">
            <Image
              src="/itamar-mizrahi.jpg"
              alt="Itamar Mizrahi - Cybersecurity Entrepreneur and VP Product Growth at Tenable - Professional portrait"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              🔒 I'm a seasoned technology leader and entrepreneur with extensive experience in cybersecurity. Former Co-founder and CEO of Cymptom (acquired by Tenable), now leading product growth at Tenable.
            </p>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">💼 Professional Journey</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🚀 VP Product Growth @ Tenable
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Leading product growth strategy and execution for Tenable's Exposure Management platform, driving market expansion and customer adoption.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                July 2025 - Present
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🏢 VP Engineering @ Tenable
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Led product and engineering for Tenable One, Tenable's Exposure Management platform. Scaled and managed a global team of 60+ across engineering, product, and data science. Successfully integrated Cymptom's technology to become a core component of Tenable One and Attack Path Analysis.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                February 2022 - July 2025
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🚀 Co-founder & CEO @ Cymptom
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Built and scaled Cymptom, a leader in Exposure Validation, allowing organizations to eliminate attack paths before they occur. Led the company from concept to successful acquisition by Tenable.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                March 2019 - February 2022 (Acquired by Tenable)
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🎓 Instructor @ John Bryce
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Provided cybersecurity training for SOC analysts, sharing expertise and best practices with the next generation of security professionals.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                August 2017 - January 2020
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🔧 Red Team Specialist @ CyberArk
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Conducted red team assessments for Fortune 500 companies to demonstrate the value and necessity of CyberArk's privileged access management solutions.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                October 2015 - July 2017
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🛡️ Security Researcher @ Israel Defense Forces
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Founded and led a cybersecurity department within a classified unit, developing critical security capabilities and threat intelligence.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                December 2011 - September 2015
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">🎓 Education</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🎓 Bachelor of Science (B.Sc.), Computer Science
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                The College of Management - Academic Studies
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                2015 - 2018
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🤖 Robotics Technology/Technician
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                ORT Colleges
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                2009 - 2011
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">🎤 Speaking & Thought Leadership</h2>
          
          <div className="space-y-4">            
            <p className="text-neutral-600 dark:text-neutral-400">
              Available for speaking engagements on cybersecurity leadership, startup scaling, security product development, and emerging threat landscapes.
            </p>
          </div>

          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">🎯 Mission & Values</h2>
          
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              <strong>🛡️ Building Impactful Security Products:</strong> I believe that effective security solutions should be both powerful and accessible. My focus is on creating tools that security teams actually want to use and that provide measurable value to organizations.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-400">
              <strong>🤝 Mentoring the Next Generation:</strong> I'm passionate about helping emerging security professionals develop their skills and navigate their careers. Whether through open-source contributions, speaking engagements, or direct mentorship, I believe in paying forward the knowledge I've gained.
            </p>
            
            <p className="text-neutral-600 dark:text-neutral-400">
              <strong>📚 Continuous Learning:</strong> The cybersecurity landscape evolves rapidly, and staying current requires constant learning. I'm always exploring new technologies, threat vectors, and defensive strategies to ensure the products I help build remain effective.
            </p>
          </div>

          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">⚡ Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">🔐 Security Domains</h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Attack Path Validation & Exposure Management</li>
                <li>Network Security & Firewall Technologies</li>
                <li>Active Directory Security & Red Teaming</li>
                <li>Cloud Security & DevSecOps</li>
                <li>Threat Intelligence & Detection</li>
                <li>Privileged Access Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">💻 Technologies</h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>Python, Typescript, Go</li>
                <li>AWS, Azure, GCP</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD & Automation</li>
                <li>Product Growth & Analytics</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">🌊 Beyond Work</h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            When I'm not building security products or mentoring teams, you'll find me:
          </p>
          
          <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
            <li><strong>🏄‍♂️ Surfing</strong> - Catching waves helps me stay balanced and creative</li>
            <li><strong>✈️ Traveling</strong> - Exploring new cultures and perspectives</li>
            <li><strong>🔧 Open Source</strong> - Contributing to security tools and utilities</li>
            <li><strong>🎤 Community</strong> - Speaking at conferences and security meetups</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 
