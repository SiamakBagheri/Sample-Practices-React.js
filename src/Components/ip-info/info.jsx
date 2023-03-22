const Info = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img
                  src={props.info.flag.img}
                  alt={props.info.country}
                  className="img-fluid"
                />
              </div>
              <div className="text-center my-3">
                <h3 className="text-secondary">
                  آی پی شما: <span className="text-success">{props.info.ip}</span>
                </h3>
                <p className="text-secondary">
                  منطقه: <span className="text-success">{props.info.region}</span>
                </p>
                <p className="text-secondary">
                  کشور: <span className="text-success">{props.info.country}</span>
                </p>
                <p className="text-secondary">
                  پایتخت کشور: <span className="text-success">{props.info.capital}</span>
                </p>
                <p className="text-secondary">
                 شهر شما: <span className="text-success">{props.info.city}</span>
                </p>
                <p className="text-secondary">
                  ناشناس: <span className="text-success">{props.info.anonymous ? "بله" : "خیر"}</span>
                </p>
                <p className="text-secondary">
                  پروکسی: <span className="text-success">{props.info.proxy ? "بله" : "خیر"}</span>
                </p>
                <p className="text-secondary">
                  فیلترشکن: <span className="text-success">{props.info.vpn ? "بله" : "خیر"}</span>
                </p>
                <p className="text-secondary">
                  تور: <span className="text-success">{props.info.tor ? "بله" : "خیر"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Info;
