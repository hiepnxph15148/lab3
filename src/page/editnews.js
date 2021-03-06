import data from "../data"

const EditNews = {
    print(id) {
        const reuslt = data.find((post) => post.id === id);
        return /* html */`
        <div class="w-24 h-10 border-2 text-center py-1 my-10 ml-20"><a href="/admin/news">Trở Về</a></div>
        <div class="max-w-4xl m-auto bg-gray-100">
        <h3 class="text-center font-semibold text-3xl mt-10 pt-10">Edit News</h3>
        <form class="py-10 pl-20">
            <div class="my-10">
                <label>Title:</label><br>
                <input class="border-2 border-slate-900 w-96 h-10" type="text" value="${reuslt.title}">
            </div>
            <div class="my-10">
                <img class="w-20 h-20" src="${reuslt.img}">
                <label>Image:</label><br>
                <input class="" type="file" value="">
            </div>
            <div class="my-10">
                <label>Desc:</label><br>
                <input class="border-2 border-slate-900 w-96 h-10" type="text" value="${reuslt.desc}">
            </div>
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Edit
            </button>
        </form>
        
        </div>    
        `
    }
};
export default EditNews;