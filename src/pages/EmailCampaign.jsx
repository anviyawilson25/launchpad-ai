import ContentCard from "../components/marketing/ContentCard";
import CopyButton from "../components/marketing/CopyButton";
import DownloadButtons from "../components/marketing/DownloadButtons";

import { emailCampaign } from "../data/marketingDummyData";

function EmailCampaign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] p-10">

        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white">
                AI Email Campaign Generator
            </h1>

            <p className="text-gray-300 mt-3">
                Generate professional email campaigns with the power of AI.
            </p>
        </div>
      <ContentCard
        title="Marketing Email"
        content={`Subject: ${emailCampaign.subject}\n\n${emailCampaign.body}`}
      >
        <CopyButton
          textToCopy={`Subject: ${emailCampaign.subject}\n\n${emailCampaign.body}`}
        />

        <DownloadButtons />
      </ContentCard>

    </div>
  );
}

export default EmailCampaign;