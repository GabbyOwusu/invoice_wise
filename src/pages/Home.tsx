import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";
import mailIcon from "../assets/icons/mail.svg";
import { Button } from "@/components/ui/button";
import arrowIcon from "../assets/icons/arrow.svg";
import checkIcon from "../assets/icons/check_icon.svg";
import dashboardPreview from "../assets/images/dashboard_preview.svg";
import c1 from "../assets/images/c1.svg";
import c2 from "../assets/images/c2.svg";
import c3 from "../assets/images/c3.svg";
import c4 from "../assets/images/c4.svg";
import c5 from "../assets/images/c5.svg";
import ListTile from "@/components/ListTile";
import receipt from "../assets/icons/receipt.svg";
import receipt2 from "../assets/images/receipt.svg";
import profile from "../assets/icons/profile.svg";
import wallet from "../assets/icons/wallet.svg";
import bg_mesh_top from "../assets/images/bg_mesh_top.svg";
import bg_mesh_bottom from "../assets/images/bg_mesh_bottom.svg";
import PaymentProviderCard from "@/components/PaymentProviderCard";
import stripe from "../assets/images/stripe_logo.svg";
import payPal from "../assets/images/paypal_logo.svg";
import quickBooks from "../assets/images/quick_books_logo.svg";

const Home = () => {
  return (
    <>
      <header className="bg-squares">
        <Navbar />
        <div className="w-full flex flex-col justify-center items-center text-center">
          <div className=" mt-[122px] border rounded-3xl px-4 py-2 uppercase font-bold">
            <h1 className="text-[14px]">
              Your <span className="text-primary">#1</span> invoicing solution
              🔥🎖️
            </h1>
          </div>
          <h1 className="text-[72px] pt-[14px] font-bold leading-[80px]">
            Invoicing Made Easy for
            <br /> Small{" "}
            <span className="bg-primary my-0 text-white px-2">Businesses</span>
          </h1>
          <h1 className="mt-[24px] text-subtitle">
            Simplify your finances and unleash the power of effortless invoicing
            with InvoiceWise.
            <br /> Experience seamless financial management and stay on track
            with ease.
          </h1>
          <form
            action=""
            className="relative bg-[#FAFAFA] w-[508px] border mt-[60px] rounded-[6px] h-[56px] flex items-center justify-center pl-4 pr-1"
          >
            <img src={mailIcon} alt="mail" />
            <Input
              className=" focus:outline-none focus-visible:ring-0 !text-base h-full  outline-none border-none   shadow-none "
              placeholder="Enter your email"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Button className="bg-black">Get Started</Button>{" "}
            <div className="absolute  -right-[52%] flex items-start gap-2">
              <img src={arrowIcon} alt="arrow" height={70} width={70} />
              <div className="border border-[#CCCCCC] bg-[#FAFAFA] rounded px-2 py-2">
                <h1 className="text-[12px] font-medium">
                  Oga join den see wonders ✨
                </h1>
              </div>
            </div>
          </form>
          <div className="flex items-center gap-10 mt-[60px]">
            <div className="flex items-center gap-1">
              <div className="rounded-full bg-[#E9FBF0] w-[23px] h-[23px] flex items-center justify-center">
                <img src={checkIcon} alt="check" />
              </div>
              <h1 className="text-[14px] font-medium text-subtitle">
                No Credit Cards Required
              </h1>
            </div>

            <div className="flex items-center gap-1">
              <div className="rounded-full bg-[#E9FBF0] w-[23px] h-[23px] flex items-center justify-center">
                <img src={checkIcon} alt="check" />
              </div>
              <h1 className="text-[14px] font-medium text-subtitle">
                No hidden fees
              </h1>
            </div>

            <div className="flex items-center gap-1">
              <div className="rounded-full bg-[#E9FBF0] w-[23px] h-[23px] flex items-center justify-center">
                <img src={checkIcon} alt="check" />
              </div>
              <h1 className="text-[14px] font-medium text-subtitle">
                4.9/5 TRUSTPILOT
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full flex items-center justify-center mt-[100px]">
        <img src={dashboardPreview} className="min-w-[50%]" alt="dashboard" />
      </div>
      <section className="w-full flex flex-col items-center justify-center mt-[60px]">
        <h1 className="font-semibold text-subtitle">
          TRUSTED BY BUSINESS ACROSS MANY INDUSTRIES{" "}
        </h1>
        <div className="flex items-center gap-32 mt-8">
          <img src={c1} alt="c1" />
          <img src={c2} alt="c2" />
          <img src={c3} alt="c3" />
          <img src={c4} alt="c4" />
          <img src={c5} alt="c5" />
        </div>
      </section>

      <section className=" bg-black text-white w-full flex items-start justify-center mt-[60px] p-40">
        <div className="flex items-center gap-28">
          <div className="h-[595px] w-[610px] rounded-3xl bg-[#262626] py-10 pl-16  ">
            <img
              src={receipt2}
              alt="receipt2"
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
          <div className="w-[50%]">
            <h1 className="text-4xl font-bold  leading-[50px]">
              All-in-one platform for your <br /> invoicing needs
            </h1>
            <h1 className=" font-light text-white text-sm mt-4 mb-[56px]">
              All the invoicing features needs are present.All the invoicing
              features
              <br /> needed are present
            </h1>
            <ListTile
              title="Invoices"
              description={
                "Use invoiceWise to convert unbilled time into professional looking invoices."
              }
              imagePath={receipt}
            />

            <ListTile
              className="mt-12"
              title="Client Management"
              description={
                "Use invoiceWise to convert unbilled time into professional looking invoices."
              }
              imagePath={profile}
            />

            <ListTile
              className="mt-12"
              title="Payment Integration"
              description={
                "Use invoiceWise to convert unbilled time into professional looking invoices."
              }
              imagePath={wallet}
            />
          </div>
        </div>
      </section>
      <section className="w-full   items-center justify-center flex flex-col  ">
        <img
          className="object-cover bg-no-repeat bg-center w-full h-[100px]"
          src={bg_mesh_top}
          alt="bg_mesh_top"
        />
        <div className="my-14">
          <h1 className="text-4xl font-bold  leading-[50px] text-center ">
            Accept online payments from <br /> your clients
          </h1>
          <h1 className="text-subtitle text-center mt-2 font-light">
            Integrated with the best top payment providers
          </h1>
          <div className="w-full flex items-center justify-center gap-12 mt-20 container">
            <PaymentProviderCard
              imagePath={stripe}
              title="Stripe"
              description="You can easily integrate your stripe account and start receiving payments to account without any hassle"
            />
            <PaymentProviderCard
              imagePath={payPal}
              title="PayPal"
              description="Integrated with the best top payment providers"
            />
            <PaymentProviderCard
              imagePath={quickBooks}
              title="QuickBooks"
              description="Integrated with the best top payment providers"
            />
          </div>
        </div>
        <img
          className="object-cover bg-no-repeat bg-center w-full h-[100px]"
          src={bg_mesh_bottom}
          alt="bg_mesh_bottom"
        />
      </section>

      <section className="w-full mx-auto bg-primary">
        <h1 className="text-white text-center text-4xl font-bold py-[70px]">
          Stop chasing your clients <br /> around
        </h1>
      </section>
    </>
  );
};

export default Home;
