<template>
  <div class="section">
    <div class="container">
      <article class="media">
        <figure class="media-left">
          <img src="https://s.gravatar.com/avatar/9bd19c8f7c7de70d98f285821ce42420" />
        </figure>
        <div class="media-content">
          <div class="content">
            <h2 class="title">Simple Encrypt Decrypt</h2>
            <h5 class="subtitle">Created by: Bervianto Leo Pratama</h5>
            <p>
              Visit
              <a href="https://berviantoleo.my.id">my personal page</a>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  }
};
</script>