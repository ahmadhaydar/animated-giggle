import React from "react";
import { CompanyScrollPlaceholder } from "./fragments/CompanyScrollPlaceholder";

export const Companies = () => {
  return (
    <div className="flex flex-col bg-primary items-center overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-items-center max-w-5xl gap-8 pt-24 px-5 ">
        <h3 className="text-3xl font-bold text-primary-content text-center lg:text-5xl lg:text-left">
          Over 1000+ businesses have trusted us to elevate their business.
        </h3>
        <p className="text-primary-content text-center lg:text-xl lg:text-left">
          Join hundreds of satisfied clients who have already revolutionized
          their businesses with our ERP solutions. Whether you're a small
          startup or an established enterprise, our ERP system is designed to
          grow with you.
        </p>
      </div>
      <CompanyScrollPlaceholder />
    </div>
  );
};

