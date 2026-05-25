import Layout from "components/Layout";
import SEO from "components/common/Seo";
import AcademyLanding from "components/home/AcademyLanding";

export default function Index() {
  return (
    <Layout>
      <SEO title="The Communication Edge" />
      <AcademyLanding />
    </Layout>
  );
}
