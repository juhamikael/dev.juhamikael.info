import type { FC } from "react";
import { modifyBody } from "../../lib/utils";

interface IPortfolioProps {
  title: string;
  companyStackTags: string[];
  company: string;
  date: string;
  body: string;
}

const Portfolio: FC<IPortfolioProps> = (props) => {
  const { title, companyStackTags, company, date, body } = props;
  return (
    <>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-lg">{companyStackTags.join(", ")}</div>
      <div className="mt-3 font-bold">{company}</div>
      <div>{date}</div>
      <div className="mt-5 leading-normal text-sm">{modifyBody(body)}</div>
    </>
  );
};

export default Portfolio;
