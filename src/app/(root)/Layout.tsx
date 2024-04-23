import Layout from "@/components/layout";

const LayoutApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default LayoutApp;
