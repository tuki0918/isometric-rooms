import { SkeletonInformationCard } from "components/InformationCard";
import { PageLayout } from "./page";

export default function Loading() {
  return (
    <PageLayout>
      <SkeletonInformationCard />
    </PageLayout>
  );
}
