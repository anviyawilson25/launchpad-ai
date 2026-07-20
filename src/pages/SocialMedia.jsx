import ContentCard from "../components/marketing/ContentCard";
import CopyButton from "../components/marketing/CopyButton";
import DownloadButtons from "../components/marketing/DownloadButtons";

import { socialMediaPosts } from "../data/marketingDummyData";

function SocialMedia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] p-10">

      <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white">
                AI Social Media Generator
            </h1>

            <p className="text-gray-300 mt-3">
             Create engaging AI-powered social media content for your business.
            </p>
      </div>

      <div className="space-y-8">

        {socialMediaPosts.map((post) => (

          <ContentCard
            key={post.id}
            title={post.title}
            platform={post.platform}
            content={post.content}
            hashtags={post.hashtags}
            generatedTime={post.generatedTime}
          >

            <CopyButton textToCopy={post.content} />

            <DownloadButtons />

          </ContentCard>

        ))}

      </div>

    </div>
  );
}

export default SocialMedia;