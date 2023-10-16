import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog1 = new BlogBuilder({
  index: 0,
  title: "About Qt Quick",
  image: "img",
  description:
    "This is a summary I compiled during my research at work, where I investigated the suitability of integrating Qt Quick into our codebase.",
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

  const blog2 = new BlogBuilder({
    index: 1,
    title: "Game Backlog Manager | SwiftUI & Core Data",
    image: "img",
    description:
      "Game Backlog Manager is a user-friendly mobile application developed using SwiftUI and Core Data, designed to streamline the management of a gaming backlog.",
  })
    .addHeading("Heading")
    .addParagraph(
      "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
    )
    .addParagraph(
      "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
    );

bloglist.push(blog1);
bloglist.push(blog2);

export default bloglist;
