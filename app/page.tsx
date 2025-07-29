import BlogPosts from 'app/components/posts'
import Projects from 'app/components/projects'
import Image from 'next/image'

export default function Page() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <Image
            src="/itamar-mizrahi.jpg"
            alt="Itamar Mizrahi - Cybersecurity Entrepreneur and VP Engineering at Tenable"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-6 text-3xl font-semibold tracking-tighter">
            Itamar Mizrahi
          </h1>
          <p className="mb-4 text-lg text-neutral-700 dark:text-neutral-300">
            {`A seasoned technology leader and entrepreneur with extensive experience in cybersecurity. Proven track record in building and scaling software products from inception to growth. Former Co-founder and CEO of Cymptom, acquired by Tenable.`}
          </p>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            {`My passion lies in building high-impact security products that protect organizations from evolving cyber threats. I enjoy mentoring the next generation of security professionals and sharing insights from my experience in both startup and enterprise environments.`}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            In my free time, I like surfing and traveling
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <div>
        <h2 className="text-xl font-semibold tracking-tighter mb-6">Latest Insights</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
