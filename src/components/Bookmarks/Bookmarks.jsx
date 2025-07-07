import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 mx-auto bg-gray-900 p-4 rounded-lg mt-8 ml-6">
            <h2 className="text-2xl font-semibold text-white bg-green-700 p-2 rounded-l-full rounded-r-full justify-center flex">Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => (
                    <div key={index}>
                        <h3 className="bg-pink-100 m-4 p-4 rounded-lg text-2xl font-semibold text-green-800">{bookmark.title}</h3>
                        <p>{bookmark.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;