// will replace with an api later

const fakeArticles = [
  {
    title: "fakeArticle1",
    content: [
      {
        section: "fake section name 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "real section name 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 4",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
    ],
  },
  {
    title: "fakeArticle2",
    content: [
      {
        section: "fake section name 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
    ],
  },
  {
    title: "fakeArticle3",
    content: [
      {
        section: "fake section name 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
      {
        section: "fake section name 3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos quia voluptas. Culpa accusamus eligendi eum! \n\n Adipisci quasi, laboriosam fuga quidem, hic voluptates qui repellendus reprehenderit quos repudiandae fugit nostrum. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi quis voluptatem dolore nobis reprehenderit, ipsam aliquam perferendis recusandae ab et perspiciatis? Dignissimos velit accusamus cumque vero, temporibus numquam itaque. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore ut quae minus impedit dignissimos incidunt autem sit assumenda magni nobis eos expedita voluptatem rem quod distinctio optio, minima fugiat. \n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis dolor totam reiciendis accusantium dolorum culpa pariatur, nam dolore corporis sunt aut dignissimos tempora porro molestias vel, sit doloremque? Quos! \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempore reiciendis, eius quo deserunt laboriosam itaque excepturi repudiandae magnam ipsum inventore ea sapiente quas reprehenderit, nulla ipsa deleniti, aperiam libero.",
      },
    ],
  },
];

export default fakeArticles;
