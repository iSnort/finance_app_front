import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";

interface Props {}

const CompanyPage = (props: Props) => {
  // useParams get the params pasing throw the URL  
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [setCompany, ticker]);

  return (
    <>
     {
      company 
      ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar />
          {/* We can add a ! at the end of the our const ticker to avoid the error about undenied param */}
          {/* This is a re usable component and it is the firts props that CompanyDashboard required, passed as a child compoenent */}
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <p className="bg-white shadow rounded text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard> 

        </div>
      )
      : (
        <Spinner />
      )
     }
    </>
  )
}

export default CompanyPage