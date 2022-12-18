const apiUnsplash = (imagem, size) => `https://source.unsplash.com/${size}/?${imagem}`;

const usersData = [
    { userAvatar: "assets/img/stories/1.png", user: "9gag", post: "coding" },
    { userAvatar: "assets/img/stories/2.png", user: "meowed", post: "cat" },
    { userAvatar: "assets/img/stories/3.png", user: "barked", post: "harrypotter" },
    { userAvatar: "assets/img/stories/4.png", user: "nathanwpyle...", post: "viagem" },
    { userAvatar: "assets/img/stories/5.png", user: "wawawiwac...", post: "apartamento" },
    { userAvatar: "assets/img/stories/6.png", user: "respondeai", post: "math" },
    { userAvatar: "assets/img/stories/7.png", user: "filomoderna", post: "filosofia" },
    { userAvatar: "assets/img/stories/8.png", user: "memeriago.", post: "meme" },
]

const generateStoriesHTML = stories => {
    return stories.reduce((accumulator, { userAvatar, user }) => {
        return accumulator += `
            <a href="#" class="story">
                <img src="assets/img/stories/stories_background.jpg" class="story-img"></img>
                <img src="${userAvatar}" class="story-user"></img>
                <p>${user}</p>
            </a>
        `
    }, "")
}

const generatePostsHTML = posts => {
    return posts.reduce((accumulator, _) => {
        let randomNumber = Math.round(Math.random() * 7)
        let randomUser = usersData[randomNumber]
        let randomPost = apiUnsplash(usersData[randomNumber].post, "614x614")

        return accumulator += `
        <article class="posts">
            <header class="header-post">
                <div class="user-info flex-container">
                    <img src="${randomUser.userAvatar}" style="width:32px;"></img>
                    <p>${randomUser.user}</p>
                </div>
                <a href="">
                    <ion-icon name="ellipsis-horizontal-outline" style="width:20px; margin-right:18px; margin-top:15px; color: black;"></ion-icon>
                </a>
            </header>
            <div class="post-img">
            <picture>
                <img src="${randomPost}"></img>
            </picture>      
            </div>

            <footer>
                <div class="icons-area flex-container">
                    <div class="shared-icons flex-container">
                        <a href="#">
                            <img src="assets/img/heart.svg" alt="" style="width:20px;">
                        </a>

                        <a href="#">
                            <img src="assets/img/chat.svg" alt="">
                        </a>

                        <a href="#">
                            <img src="assets/img/send.svg" alt="">
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="assets/img/save.svg" alt="" class="save-icon">
                        </a>
                    </div>
                </div>
                <div class="comment-area">
                    <img src="${randomUser.userAvatar}" style="width:20px;"></img> 
                    <span> 
                        Curtido por <b>${randomUser.user}</b> e <strong> outras ${Math.round(Math.random() * 100000).toLocaleString('pt-BR')} pessoas</strong>
                    </span>
                </div>
            </footer>
        </article>
        `
    }, "")
}

const insertStories = stories => {
    const ul = document.querySelector("#stories-ul")
    ul.innerHTML = stories
}

const insertPosts = posts => {
    const postsContent = document.getElementById("posts-area");

    postsContent.innerHTML = posts
}

const storiesInBox = generateStoriesHTML(usersData)
const postsInBox = generatePostsHTML(usersData)

insertStories(storiesInBox);
insertPosts(postsInBox)
