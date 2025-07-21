import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Itamar Mizrahi
      </h1>
      <p className="mb-4">
        {`A seasoned technology leader and entrepreneur with extensive experience in cybersecurity. Proven track record in building and scaling software products from inception to growth. Former Co-founder and CEO of Cymptom, acquired by Tenable.`}
      </p>
      <p className="mb-4">
        {`My passion lies in building high-impact security products that protect organizations from evolving cyber threats. I enjoy mentoring the next generation of security professionals and sharing insights from my experience in both startup and enterprise environments.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
