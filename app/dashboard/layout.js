
import PageHeader from "../components/page-header";
// import Trend from "../components/trend";

export default function Page({children}) {
  return (
    <>
<PageHeader className="mt-4 "/>
<div>
    {children}
</div>
<div>
    {/* <Trend/> */}
</div>
    </>
  )
} 