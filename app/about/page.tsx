import Image from 'next/image'

export const metadata = {
  title: 'About - Itamar Mizrahi',
  description: 'Learn more about Itamar Mizrahi\'s journey in cybersecurity, from founding Cymptom to leading engineering teams at Tenable.',
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
              alt="Itamar Mizrahi - Cybersecurity Leader and VP Engineering at Tenable"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              🔒 I'm a cybersecurity entrepreneur and technology leader with over a decade of experience building security products that protect organizations from evolving threats.
            </p>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">💼 Professional Journey</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🏢 VP Engineering @ Tenable
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Leading engineering teams building cutting-edge exposure management solutions that help organizations understand and reduce their attack surface.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Current
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🚀 Co-founder & CEO @ Cymptom
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Built and scaled an attack path validation platform from concept to acquisition. Led product development, team growth, and strategic partnerships.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                2018 - 2022 (Acquired by Tenable)
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                🔧 Security Engineer & Consultant
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                Developed security tools and conducted penetration testing for enterprise clients. Created open-source security utilities used by the community.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                2015 - 2018
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
                <li>• Attack Path Validation & Exposure Management</li>
                <li>• Network Security & Firewall Technologies</li>
                <li>• Active Directory Security & Red Teaming</li>
                <li>• Cloud Security & DevSecOps</li>
                <li>• Threat Intelligence & Detection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">💻 Technologies</h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>• PowerShell, Python, JavaScript</li>
                <li>• AWS, Azure, GCP</li>
                <li>• Docker, Kubernetes</li>
                <li>• SIEM & Security Tools</li>
                <li>• CI/CD & Automation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold tracking-tighter mt-8 mb-4">🌊 Beyond Work</h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            When I'm not building security products or mentoring teams, you'll find me:
          </p>
          
          <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
            <li>• <strong>🏄‍♂️ Surfing</strong> - Catching waves helps me stay balanced and creative</li>
            <li>• <strong>✈️ Traveling</strong> - Exploring new cultures and perspectives</li>
            <li>• <strong>🔧 Open Source</strong> - Contributing to security tools and utilities</li>
            <li>• <strong>🎤 Community</strong> - Speaking at conferences and security meetups</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 