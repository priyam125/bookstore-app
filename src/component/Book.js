import { useNavigate } from "react-router";

export default function Book({ title, author, coverId, id }) {
  console.log(title);
  console.log(author);
  console.log(coverId);

  const navigate = useNavigate();
  return (
    <div className="w-48 min-h-[275px] border border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
      <div
        onClick={() =>
          navigate(`/books/${id}`, {
            state: {
              title: title,
              author: author,
              coverId: coverId,
            },
          })
        }
        className="w-full h-48"
      >
        <img
          src={
            coverId
              ? "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
              : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
          }
          alt="card-banner"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold mt-3 mb-2">{title}</h3>
      {/* <div className="flex justify-between items-center">
        <span>
          Author:{" "}
          <span className="text-gray-500 italic font-medium">{author}</span>
        </span>
      </div> */}
    </div>
  );
}
