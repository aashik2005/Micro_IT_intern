const posts = [
    {
        title: "🌐 Intro to Web Development",
        excerpt: "Start building websites using HTML, CSS, and JS...",
        content: "Web development is about creating websites that are visually appealing and functionally solid. You'll begin with HTML to structure content, CSS to style it, and JavaScript to make it interactive. Once you master these, you can explore frameworks like React, Vue, and backend tech like Node.js."
    },
    {
        title: "📱 Mobile-First Design",
        excerpt: "Learn why designing for mobile-first improves usability...",
        content: "Mobile-first design is a strategy where you design your website layout starting from the smallest screen. This ensures great usability and fast load times for smartphone users. Techniques include fluid grids, flexible images, and media queries."
    }
];

function loadPosts() {
    const container = document.getElementById("blogContainer");
    posts.forEach((post, index) => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <span class="read-more" onclick="togglePost(${index})">Read more ↓</span>
            <div class="full-post" id="post-${index}" style="display: none;">${post.content}</div>
        `;
        container.appendChild(card);
    });
}

function togglePost(index) {
    const contentDiv = document.getElementById(`post-${index}`);
    const isVisible = contentDiv.style.display === "block";
    contentDiv.style.display = isVisible ? "none" : "block";

    const toggleText = document.querySelectorAll(".read-more")[index];
    toggleText.textContent = isVisible ? "Read more ↓" : "Show less ↑";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Run the function to load posts
loadPosts();
