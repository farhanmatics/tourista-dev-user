import Link from "next/link";
import PageBottom from "../../components/pageBottom";
import PageHeader from "../../components/pageHeader";

const Upload = () => {
  return (
    <>
      <PageHeader backlink="/traveler" />
      <div className="pt-20">
        <div className="flex items-center justify-center">
          <div className="flex flex-col border border-purple-800 rounded-lg px-8 py-3">
            <p className="py-3 font-semibold capitalize text-tourPurple">
              Traveler Files:
            </p>
            <input
              type="file"
              name=""
              id=""
              className="form-input px-2 py-2 border border-purple-200 rounded-md w-64"
            />
            <Link
              href="#"
              className="rounded-md bg-purple-950 px-2 py-2 mt-2 text-white text-center font-semibold text-sm"
            >
              Upload
            </Link>
          </div>
        </div>
      </div>
      <PageBottom title="Continue" linkurl="/payment" />
    </>
  );
};

export default Upload;
