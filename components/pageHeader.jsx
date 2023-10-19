import Breadcrumb from "./breadcrumbs";

const PageHeader = ({ breadcrumbs, children }) => {
  return (
    <div className="page-header">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7">
          <Breadcrumb breadcrumbs={breadcrumbs} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
