import Banner from "../components/banner";
import NewsList from "../components/newsList";
import footer from "../components/footer";
const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${NewsList.render()}
            </div>
            
            <div>
                ${footer.render()}
            </div>
        `;
    },
};
export default HomePage;