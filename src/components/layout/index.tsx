const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-center justify-center max-w-md">{children}</section>
  );
};

export default Layout;
