import BreadCumb from "../../Components/BreadCumb";
import img from "../../../public/images/qr.png";
import logo from "../../../public/images/logo-full.png";

const Invoice = () => {
  return (
    <div className="p-5 space-y-5">
      <div className="">
        <BreadCumb text1={"Layout"} text2={"Bank"}></BreadCumb>
      </div>

      {/* invoice -------------- */}
      <div className="bg-white shadow-md rounded-lg  mx-auto w-full">
        <div className="flex justify-between text-gray-500 p-5">
          <h1 className="font-semibold">Invoice</h1>
          <p>
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>

          <p>Status: Pending</p>
        </div>
        <hr />
        <div className="flex justify-between p-5 mt-5 text-gray-500">
          <div>
            <h2 className="text-xl font-semibold text-black">From:</h2>
            <p className="font-bold">Webz Poland</p>
            <p>Madalinskiego 8</p>
            <p>71-101 Szczecin, Poland</p>
            <p>Email: info@webz.com.pl</p>
            <p>Phone: +48 444 666 3333</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">To:</h2>
            <p className="font-bold">Bob Mart</p>
            <p>Attn: Daniel Marek</p>
            <p>43-190 Mikolow, Poland</p>
            <p>Email: marek@daniel.com</p>
            <p>Phone: +48 123 456 789</p>
          </div>
          <div className="flex justify-between gap-16 items-start">
            <div>
              <img src={logo} alt="logo" />
              <p>Please send exact amount :  0.15050000 BTC</p>
              <p>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</p>
              <p>Current exchange rate 1BTC = $6590 USD</p>
            </div>
            <div className="w-[100px]">
              <img src={img} alt="Qr code" />
            </div>
          </div>
        </div>
        <div className="mt-8 p-5">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 text-left">#</th>
                <th className="py-2 text-left">Item</th>
                <th className="py-2 text-left">Description</th>
                <th className="py-2 text-left">Unit Cost</th>
                <th className="py-2 text-left">Qty</th>
                <th className="py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">1</td>
                <td className="py-2">Origin License</td>
                <td className="py-2">Extended License</td>
                <td className="py-2">$999,00</td>
                <td className="py-2">1</td>
                <td className="py-2">$999,00</td>
              </tr>
              <tr>
                <td className="py-2">2</td>
                <td className="py-2">Custom Services</td>
                <td className="py-2">
                  Instalation and Customization (cost per hour)
                </td>
                <td className="py-2">$150,00</td>
                <td className="py-2">20</td>
                <td className="py-2">$3.000,00</td>
              </tr>
              <tr>
                <td className="py-2">3</td>
                <td className="py-2">Hosting</td>
                <td className="py-2">1 year subscription</td>
                <td className="py-2">$499,00</td>
                <td className="py-2">1</td>
                <td className="py-2">$499,00</td>
              </tr>
              <tr>
                <td className="py-2">4</td>
                <td className="py-2">Platinum Support</td>
                <td className="py-2">1 year subscription 24/7</td>
                <td className="py-2">$3.999,00</td>
                <td className="py-2">1</td>
                <td className="py-2">$3.999,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <p className="text-xl font-semibold">Subtotal</p>
            <p className="text-xl">$8.497,00</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Discount (20%)</p>
            <p className="text-xl">-$1,699.40</p>
          </div>
          <div>
            <p className="text-xl font-semibold">VAT (10%)</p>
            <p className="text-xl">$679.76</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl">$7,477.36</p>
          </div>
        </div>
        <p className="mt-8">0.15050000 BTC</p>
      </div>
    </div>
  );
};

export default Invoice;
