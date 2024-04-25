import BreadCumb from "../../Components/BreadCumb";
import img from "../../../public/images/qr.png";
import logo from "../../../public/images/logo-full.png";

const Invoice = () => {
  return (
    <div className="p-5 space-y-5">
      <div>
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
              <p>Please send exact amount : 0.15050000 BTC</p>
              <p>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</p>
              <p>Current exchange rate 1BTC = $6590 USD</p>
            </div>
            <div className="w-[100px]">
              <img src={img} alt="Qr code" />
            </div>
          </div>
        </div>
        {/* for table code  */}
        <div className="mt-8 p-5 pb-10">
          <table className="w-full table">
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
            <tbody className="">
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
              <tr>
                <td
                  colSpan={5}
                  className="text-[15px] font-semibold text-center"
                >
                  Subtotal
                </td>
                <td className="text-[15px] font-semibold">$8.497,00</td>
              </tr>
              <tr>
                <td
                  colSpan={5}
                  className="text-[15px] font-semibold text-center"
                >
                  Discount (20%)
                </td>
                <td className="text-[15px] font-semibold">-$1,699.40</td>
              </tr>
              <tr>
                <td
                  colSpan={5}
                  className="text-[15px] font-semibold text-center"
                >
                  VAT (10%)
                </td>
                <td className="text-[15px] font-semibold">$679.76</td>
              </tr>
              <tr >
                <td
                  colSpan={5}
                  className="text-[15px] font-semibold text-center"
                >
                  Total
                </td>
                <td className="text-[15px] font-semibold">
                  <span>0.15050000 BTC</span>
                  <br />
                  <span>$7,477.36</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
