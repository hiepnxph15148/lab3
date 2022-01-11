import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
            <h1 class="text-center py-2 font-bold">${result.title}</h1>
            <img src="${result.img}" class="m-auto" />
            <p class="text-center py-4" >${result.desc}</p>
        `;
    },
};
export default DetailNewsPage;