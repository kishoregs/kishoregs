(this["webpackJsonpportfolio-website"] =
  this["webpackJsonpportfolio-website"] || []).push([
  [0],
  {
    105: function (e, a, t) {
      e.exports = t.p + "static/media/cssart.949a49b4.jpg";
    },
    106: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        i = t.n(n),
        r = t(9),
        o = t.n(r),
        l = (t(97), t(148)),
        c = (t(98), t(128)),
        s = t(150),
        m = t(129),
        p = t(151),
        d = t(132),
        h = t(133),
        u = t(134),
        g = t(135),
        E = t(136),
        b = t(137),
        f = t(40),
        k = t(152),
        v = t(63),
        w = t.n(v);
      var y = () => {
          const e = Object(c.a)({
              div: {
                display: "flex",
                marginLeft: "auto",
                alignItems: "center",
              },
              appBar: { background: "primary", color: "white" },
              drawerPaper: {
                width: "60%",
                backgroundColor: "#1e6cae",
                color: "white",
              },
              button: {
                background: "inherit",
                borderRadius: 3,
                color: "white",
                height: 40,
                padding: "0 1rem",
                margin: "0 0.5rem",
                fontSize: "0.9rem",
              },
              text: { fontSize: "1.2rem" },
              span: { textShadow: "1px 1px rgba(0, 0, 0, 0.3)" },
              listItemText: { fontSize: "0.9rem", fontWeight: "500" },
            })(),
            [a, t] = Object(n.useState)(!1),
            r = () => {
              t(!a);
            },
            o = (e) => {
              let a = e.split(" "),
                t = [];
              return (
                a.forEach((e) => {
                  t.push(
                    e[0].toUpperCase() + e.slice(1, e.length).toLowerCase()
                  );
                }),
                t.join("")
              );
            },
            l = (e) => {
              document.getElementById(e).scrollIntoView({ behavior: "smooth" });
            },
            v = i.a.createElement(
              s.a,
              { className: e.div },
              i.a.createElement(
                m.a,
                { className: e.button, onClick: () => l("AboutMe") },
                "About Me"
              ),
              i.a.createElement(
                m.a,
                {
                  href: "/kishoregs/Kishore.Shiraguppi.Resume.2024.pdf",
                  className: e.button,
                  target: "_blank",
                  download: !0,
                  underline: "none",
                },
                "My Resume"
              ),
              i.a.createElement(
                m.a,
                { className: e.button, onClick: () => l("Projects") },
                "Hobby Projects"
              ),
              i.a.createElement(
                m.a,
                { className: e.button, onClick: () => l("Contact") },
                "Contact"
              )
            ),
            y = i.a.createElement(
              s.a,
              { className: e.div },
              i.a.createElement(
                p.a,
                {
                  variant: "temporary",
                  classes: { paper: e.drawerPaper },
                  anchor: "right",
                  open: a,
                  onClose: r,
                  ModalProps: { keepMounted: !0 },
                },
                i.a.createElement(
                  d.a,
                  { onClick: r },
                  ["ABOUT ME", "HOBBY PROJECTS", "CONTACT"].map((a, t) =>
                    i.a.createElement(
                      h.a,
                      { button: !0, component: "a", key: a, href: "#" + o(a) },
                      i.a.createElement(u.a, {
                        primary: a,
                        classes: { primary: e.listItemText },
                      })
                    )
                  )
                )
              ),
              i.a.createElement(
                g.a,
                { onClick: r },
                i.a.createElement(w.a, null)
              )
            );
          return i.a.createElement(
            E.a,
            { position: "fixed", className: e.appBar },
            i.a.createElement(
              b.a,
              null,
              i.a.createElement(
                f.a,
                { variant: "h6", className: e.text },
                "Kishore Shiraguppi",
                i.a.createElement(
                  "span",
                  {
                    role: "img",
                    "aria-label": "sparkle emoji",
                    className: e.span,
                  },
                  "\u2728"
                )
              ),
              i.a.createElement(k.a, { xsDown: !0 }, v),
              i.a.createElement(k.a, { smUp: !0 }, y)
            )
          );
        },
        x = t(138),
        N = t(64),
        T = t.n(N),
        S = t(65),
        z = t.n(S),
        C = t(82);
      var I = Object(C.a)({
          palette: {
            type: "light",
            primary: { light: "#e5ffff", main: "#1e6cae", dark: "#82ada9" },
            secondary: { light: "#62727b", main: "#37474f", dark: "#82ada9" },
            background: { default: "#eeeeee" },
          },
        }),
        j = t(55),
        D = t.n(j);
      var L = () => {
          const e = Object(c.a)({
              background: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "95vh",
                backgroundImage: "url(".concat(T.a, ")"),
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "cover",
                [I.breakpoints.down("xs")]: {
                  backgroundImage: "url(".concat(z.a, ")"),
                  backgroundPosition: "left center",
                  backgroundAttachment: "scroll",
                },
              },
              name: {
                position: "relative",
                top: "6rem",
                margin: "0.5rem 1rem",
                fontWeight: "bold",
                [I.breakpoints.down("xs")]: { top: "4rem", fontSize: "3.4rem" },
              },
              topText: {
                position: "relative",
                top: "6rem",
                margin: "0 1.4rem",
                [I.breakpoints.down("xs")]: { top: "4rem", fontSize: "2.5rem" },
              },
              bottomText: {
                position: "relative",
                top: "6rem",
                margin: "0 1.4rem",
                [I.breakpoints.down("xs")]: { top: "4rem", fontSize: "1.2rem" },
              },
              button: {
                position: "relative",
                top: "9rem",
                fontSize: "3.75rem",
                [I.breakpoints.down("xs")]: { top: "6rem", fontSize: "3.5rem" },
              },
              backToTopButton: {
                position: "fixed",
                bottom: "0",
                right: "0",
                margin: "1rem",
                zIndex: "99999",
              },
              backToTopButtonMobile: { margin: "0.8rem", marginBottom: "4rem" },
            })(),
            a = (e) => {
              document.getElementById(e).scrollIntoView({ behavior: "smooth" });
            };
          return i.a.createElement(
            s.a,
            { className: e.background, id: "Top" },
            i.a.createElement(
              f.a,
              { className: e.topText, variant: "h3", align: "center" },
              "Hi, my name is"
            ),
            i.a.createElement(
              f.a,
              { className: e.name, variant: "h2", align: "center" },
              "Kishore Shiraguppi"
            ),
            i.a.createElement(
              f.a,
              { className: e.bottomText, variant: "h6", align: "center" },
              "Software professional & an aspiring generalist."
            ),
            i.a.createElement(
              g.a,
              {
                className: e.button,
                "aria-label": "Scroll Down",
                onClick: () => a("AboutMe"),
              },
              i.a.createElement("span", {
                className: "iconify",
                "data-icon": "bi:chevron-compact-down",
                "data-inline": "false",
              })
            ),
            i.a.createElement(
              k.a,
              { xsDown: !0 },
              i.a.createElement(
                x.a,
                {
                  className: e.backToTopButton,
                  variant: "extended",
                  size: "small",
                  "aria-label": "Back to Top",
                  onClick: () => a("Top"),
                },
                i.a.createElement(D.a, null)
              )
            ),
            i.a.createElement(
              k.a,
              { smUp: !0 },
              i.a.createElement(
                x.a,
                {
                  className: ""
                    .concat(e.backToTopButton, " ")
                    .concat(e.backToTopButtonMobile),
                  size: "small",
                  "aria-label": "Back to Top",
                  onClick: () => a("Top"),
                },
                i.a.createElement(D.a, null)
              )
            )
          );
        },
        M = t(141),
        B = t(142);
      const W = {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        R = {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        P = {
          ...I.typography.button,
          fontSize: "1.8rem",
          fontWeight: "bold",
          textShadow: "0.1rem 0.1rem 0.1rem rgba(178, 223, 219, 0.8)",
        },
        A = {
          backgroundColor: "black",
          width: "18rem",
          margin: "1rem",
          marginTop: "0",
          height: "0.12rem",
        };
      var H = t(66),
        O = t.n(H),
        J = t(139),
        G = t(140);
      var K = () => {
        const e = Object(c.a)({
            columnDiv: { ...W },
            mainDiv: { backgroundColor: "#e8e8e8", margin: "0 auto" },
            rowDiv: { ...R },
            rowDivider: { width: "70%" },
            divider: { ...A },
            headerText: { ...P },
            skillsText: { marginTop: "2rem" },
            listItemText: { color: "black", fontSize: "1.2rem" },
            bottomText: {
              color: "black",
              fontSize: "1.2rem",
              margin: "0.5rem",
              marginBottom: "2rem",
            },
            icon: { color: "black", fontSize: "2rem" },
          })(),
          a = i.a.createElement(
            "div",
            null,
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-dot-net-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: ".NET",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-javascript-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "JavaScript",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-csharp-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "C#",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-git-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "Git",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-electron-original",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "Electron",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement("span", {
                  className: "iconify",
                  "data-icon": "file-icons:vscode",
                  "data-inline": "false",
                  style: { fontSize: "2rem" },
                })
              ),
              i.a.createElement(u.a, {
                primary: "VSCode",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-wordpress-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "Wordpress",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-nextjs-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "NextJS",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-mongodb-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "MongoDB",
                classes: { primary: e.listItemText },
              })
            ),
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                J.a,
                { className: e.icon },
                i.a.createElement(G.a, {
                  className: "devicon-oracle-plain",
                  fontSize: "inherit",
                })
              ),
              i.a.createElement(u.a, {
                primary: "Oracle",
                classes: { primary: e.listItemText },
              })
            )
          );
        return i.a.createElement(
          s.a,
          { className: "".concat(e.columnDiv, " ").concat(e.mainDiv) },
          i.a.createElement(
            f.a,
            {
              className: "".concat(e.skillsText, " ").concat(e.headerText),
              align: "center",
            },
            "My Skills & ",
            i.a.createElement("br", null),
            " Technologies"
          ),
          i.a.createElement(M.a, { classes: { root: e.divider } }),
          i.a.createElement(
            s.a,
            { className: "".concat(e.rowDiv, " ").concat(e.rowDivider) },
            i.a.createElement(
              s.a,
              { className: e.columnDiv },
              i.a.createElement(
                d.a,
                null,
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-react-original",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "Reactjs",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement("span", {
                      className: "iconify",
                      "data-icon": "simple-icons:redux",
                      "data-inline": "false",
                      style: { fontSize: "2rem" },
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "Redux & React Hooks",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-html5-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "HTML",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-css3-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "CSS",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-nodejs-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "NodeJS",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-angularjs-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "Angular",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-jquery-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "Jquery",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-java-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "Java",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-vuejs-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "VueJs",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(
                  h.a,
                  null,
                  i.a.createElement(
                    J.a,
                    { className: e.icon },
                    i.a.createElement(G.a, {
                      className: "devicon-microsoftsqlserver-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "MSSQL",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(k.a, { smUp: !0 }, a)
              )
            ),
            i.a.createElement(
              k.a,
              { xsDown: !0 },
              i.a.createElement(
                s.a,
                { className: e.columnDiv },
                i.a.createElement(d.a, null, a)
              )
            )
          ),
          i.a.createElement(
            f.a,
            { align: "center", className: e.bottomText },
            i.a.createElement(
              "span",
              { style: { fontWeight: "bold" } },
              "Currently learning: "
            ),
            "Next.js"
          )
        );
      };
      var V = () => {
          const e = Object(c.a)({
            columnDiv: { ...W },
            mainDiv: {
              width: "60%",
              [I.breakpoints.down("sm")]: { width: "80%" },
              [I.breakpoints.down("xs")]: { width: "90%" },
              margin: "0 auto",
            },
            headerText: { ...P },
            aboutText: { marginTop: "6rem" },
            divider: { ...A },
            bodyText: {
              fontSize: "1.1rem",
              color: "black",
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "1rem",
              lineHeight: "1.6rem",
            },
            link: {
              color: "black",
              textShadow: "1px 1px #1e6cae",
              textDecoration: "none",
              borderBottom: "1px solid #1e6cae",
              "&:hover": { color: "#1e6cae", cursor: "pointer" },
            },
            picture: {
              maxHeight: "100%",
              maxWidth: "100%",
              margin: "1rem",
              marginBottom: "6rem",
              width: "40%",
              [I.breakpoints.down("md")]: { width: "50%" },
              [I.breakpoints.down("sm")]: { width: "60%" },
              [I.breakpoints.down("xs")]: { width: "70%" },
              boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
            },
          })();
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              s.a,
              {
                className: "".concat(e.columnDiv, " ").concat(e.mainDiv),
                id: "AboutMe",
              },
              i.a.createElement(
                f.a,
                { className: "".concat(e.aboutText, " ").concat(e.headerText) },
                "About Me"
              ),
              i.a.createElement(M.a, { classes: { root: e.divider } }),
              i.a.createElement(
                f.a,
                { className: e.bodyText },
                "Hello !!! & Welcome to my corner. This is ",
                i.a.createElement("b", null, "Kishore Shiraguppi"),
                ". This is about my introduction & my professional background. ",
                i.a.createElement("br", null),
                " I bring over 20 years of dedicated experience in the software development industry. My career has been driven by a genuine passion for programming and a commitment to continuous learning. This enthusiasm has not only shaped my approach to technology but also instilled in me a robust work ethic and the ability to swiftly adapt to new technologies. Beyond my professional endeavors, I dedicate considerable time to staying abreast of the latest trends in business, technology, and software development. My expertise spans a diverse range of domains, including Banking, Finance, Wealth Management, Municipal Markets, Fixed Income, Logistics, Insurance, Enterprise Frameworks, Manufacturing, and Construction. Throughout my career, I have contributed to various application development teams in capacities ranging from a full-stack engineer to a team leader and technical architect. My aspiration is to further enrich my experience and contribute significantly in roles related to management, leadership, and development. I am keen on exploring opportunities where I can leverage my comprehensive background to drive innovation and excellence. Thank you for reading through this. I am looking forward to the possibility of contributing to your team and embracing the challenges and learning opportunities it offers. Warm regards to you. You can download",
                " ",
                i.a.createElement(
                  B.a,
                  {
                    href: "/kishoregs/Kishore.Shiraguppi.Resume-2024.pdf",
                    className: e.link,
                    target: "_blank",
                    download: !0,
                    underline: "none",
                  },
                  "my detailed resume here."
                ),
                "  ",
                "Also",
                " ",
                i.a.createElement(
                  B.a,
                  {
                    onClick: () => {
                      document
                        .getElementById("Contact")
                        .scrollIntoView({ behavior: "smooth" });
                    },
                    className: e.link,
                    underline: "none",
                  },
                  "my contact information & links below here"
                ),
                "."
              ),
              i.a.createElement(s.a, {
                component: "img",
                src: O.a,
                alt: "Kishore Shiraguppi",
                className: e.picture,
              })
            ),
            i.a.createElement(K, null)
          );
        },
        Y = t(153),
        q = t(143),
        F = t(72),
        U = t.n(F),
        Q = t(71),
        _ = t.n(Q),
        $ = t(73),
        X = t.n($),
        Z = t(74),
        ee = t.n(Z),
        ae = t(70),
        te = t.n(ae),
        ne = t(68),
        ie = t.n(ne),
        re = t(69),
        oe = t.n(re);
      var le = () => {
          const e = Object(c.a)({
              mainDiv: {
                backgroundColor: "rgba(0, 0, 0, 0.92)",
                position: "relative",
                bottom: "0",
                marginTop: "5rem",
              },
              columnDiv: { ...W },
              rowDiv: { ...R },
              headerText: { ...P },
              contactText: {
                color: "#eeeeee",
                margin: "0.5rem",
                textShadow: "0.1rem 0.1rem #4f4f4f",
              },
              divider: { ...A },
              contactDivider: { backgroundColor: "#eeeeee" },
              emailText: {
                color: "#eeeeee",
                fontSize: "1.1rem",
                fontWeight: 500,
              },
              link: { fontSize: "1.1rem", fontWeight: 500 },
              icon: {
                color: "#eeeeee",
                margin: "0.5rem",
                [I.breakpoints.down("sm")]: { margin: "0.1rem" },
              },
              github: { fontSize: "2.2rem" },
              linkedIn: { fontSize: "2.7rem" },
              twitter: { fontSize: "2.6rem" },
              youtube: { fontSize: "3rem" },
              mailicon: { fontSize: ".5 rem" },
            })(),
            a = i.a.createElement(
              s.a,
              { className: e.rowDiv, id: "Contact" },
              i.a.createElement(
                Y.a,
                { title: "Phone", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "Phone Link",
                    onClick: () => window.open("tel:+1201-218-1313"),
                  },
                  i.a.createElement(ie.a, { className: e.linkedIn })
                )
              ),
              i.a.createElement(
                Y.a,
                { title: "WhatsApp", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "WhatsApp Link",
                    onClick: () => window.open("https://wa.me/12012181313"),
                  },
                  i.a.createElement(oe.a, { className: e.linkedIn })
                )
              ),
              i.a.createElement(
                Y.a,
                { title: "Email", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "Email Link",
                    onClick: () => window.open("mailto:kishor4u@gmail.com"),
                  },
                  i.a.createElement(te.a, { className: e.linkedIn })
                )
              ),
              i.a.createElement(
                Y.a,
                { title: "LinkedIn", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "LinkedIn Link",
                    onClick: () =>
                      window.open(
                        "https://www.linkedin.com/in/kishore-shiraguppi-a5a204b/"
                      ),
                  },
                  i.a.createElement(_.a, { className: e.linkedIn })
                )
              ),
              i.a.createElement(
                Y.a,
                { title: "GitHub", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "GitHub link",
                    onClick: () => window.open("https://github.com/kishoregs/"),
                  },
                  i.a.createElement(U.a, { className: e.github })
                )
              ),
              i.a.createElement(
                Y.a,
                { title: "Twitter", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "Twitter link",
                    onClick: () =>
                      window.open("https://twitter.com/kishoregs4u"),
                  },
                  i.a.createElement(X.a, { className: e.twitter })
                )
              ),
              i.a.createElement(
                Y.a,
                { title: "YouTube", arrow: !0, TransitionComponent: q.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "YouTube link",
                    onClick: () =>
                      window.open("https://www.youtube.com/kishoregs4u/"),
                  },
                  i.a.createElement(ee.a, { className: e.youtube })
                )
              )
            );
          return i.a.createElement(
            s.a,
            { className: "".concat(e.columnDiv, " ").concat(e.mainDiv) },
            i.a.createElement(
              f.a,
              { className: "".concat(e.headerText, " ").concat(e.contactText) },
              "Contact Me"
            ),
            i.a.createElement(M.a, {
              classes: {
                root: "".concat(e.divider, " ").concat(e.contactDivider),
              },
            }),
            a
          );
        },
        ce = t(144),
        se = t(145),
        me = t(146),
        pe = t(147);
      var de = (e) => {
          const a = Object(c.a)({
            card: {
              width: "50%",
              [I.breakpoints.down("md")]: { width: "60%" },
              [I.breakpoints.down("sm")]: { width: "75%" },
              [I.breakpoints.down("xs")]: { width: "90%" },
            },
            title: { fontSize: "1.4rem", fontWeight: "bold" },
            div: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "1rem",
            },
            button: {
              color: "#f2eeeef7",
              margin: "0.5rem",
              backgroundColor: "#1e6cae",
              boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              "&:hover": { backgroundColor: "#1e6cae" },
            },
            buttonDiv: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            image: {
              height: "100%",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
            },
            text: { margin: "0.5rem 0" },
          })();
          return i.a.createElement(
            s.a,
            { className: a.div },
            i.a.createElement(
              ce.a,
              { className: a.card },
              i.a.createElement(
                se.a,
                null,
                i.a.createElement(
                  me.a,
                  null,
                  i.a.createElement(f.a, { className: a.title }, e.title),
                  e.icons,
                  i.a.createElement(f.a, { className: a.text }, e.description),
                  i.a.createElement(pe.a, {
                    className: a.image,
                    component: "img",
                    image: e.image,
                    title: e.imageTitle,
                  })
                )
              )
            )
          );
        },
        he = t(75),
        ue = t.n(he),
        ge = t(76),
        Ee = t.n(ge),
        be = t(77),
        fe = t.n(be),
        ke = t(78),
        ve = t.n(ke),
        we = t(79),
        ye = t.n(we),
        xe = t(80),
        Ne = t.n(xe),
        Te = t(81),
        Se = t.n(Te);
      t(105);
      var ze = () => {
        const e = Object(c.a)({
            columnDiv: { ...W },
            mainDiv: { width: "auto" },
            headerText: { ...P },
            projectText: { marginTop: "5rem" },
            divider: { ...A },
            projectsDivider: { paddingBottom: "0.15rem" },
            icons: {
              fontSize: "1.5rem",
              display: "flex",
              width: "100%",
              margin: "0.5rem 0",
            },
          })(),
          a = i.a.createElement(G.a, {
            className: "devicon-tailwindcss-original",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          t = i.a.createElement(G.a, {
            className: "devicon-nextjs-plain colored",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          n = i.a.createElement(G.a, {
            className: "devicon-express-original colored",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          r = i.a.createElement(G.a, {
            className: "devicon-mongodb-plain",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          o = i.a.createElement(G.a, {
            className: "devicon-react-original",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          l = i.a.createElement(G.a, {
            className: "devicon-bootstrap-plain",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          m = i.a.createElement(G.a, {
            className: "devicon-javascript-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          p = i.a.createElement(G.a, {
            className: "devicon-html5-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          d = i.a.createElement(G.a, {
            className: "devicon-jquery-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          h = i.a.createElement(G.a, {
            className: "devicon-css3-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          u = i.a.createElement(G.a, {
            className: "devicon-nodejs-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          g = i.a.createElement(G.a, {
            className: "devicon-materialui-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          E = i.a.createElement(s.a, { className: e.icons }, o, m, p, h),
          b = i.a.createElement(s.a, { className: e.icons }, o, u, m, g, p, h),
          k = i.a.createElement(
            s.a,
            { className: e.icons },
            t,
            n,
            a,
            o,
            m,
            g,
            p,
            h
          ),
          v = i.a.createElement(s.a, { className: e.icons }, n, l, o, m, p, h),
          w = i.a.createElement(
            s.a,
            { className: e.icons },
            t,
            n,
            r,
            o,
            m,
            g,
            p,
            h
          ),
          y = i.a.createElement(s.a, { className: e.icons }, m, p, h, l, d);
        s.a, e.icons, G.a;
        return i.a.createElement(
          s.a,
          {
            className: "".concat(e.columnDiv, " ").concat(e.mainDiv),
            id: "Projects",
          },
          i.a.createElement(
            f.a,
            { className: "".concat(e.projectText, " ").concat(e.headerText) },
            "Hobby Projects"
          ),
          i.a.createElement(M.a, {
            className: "".concat(e.divider, " ").concat(e.projectsDivider),
          }),
          i.a.createElement(de, {
            title: "Portfolio Website",
            icons: b,
            description:
              "This portfolio website, created to display my projects and skills as well as other information about me.",
            image: Ee.a,
            imageTitle: "Portfolio website screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/portfolio-website/",
            githubLink:
              "https://github.com/kishoreshiraguppi/portfolio-website",
          }),
          i.a.createElement(de, {
            title: "SocialDrink",
            icons: k,
            description:
              "SocialDrink is a social media management solution for businesses.",
            image: ve.a,
            imageTitle: "SocialDrink screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/portfolio-website/",
            githubLink:
              "https://github.com/kishoreshiraguppi/portfolio-website",
          }),
          i.a.createElement(de, {
            title: "QueueHero",
            icons: w,
            description:
              "QueueHero is a wailist management solution for local businesses.",
            image: ye.a,
            imageTitle: "QueueHero screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/portfolio-website/",
            githubLink:
              "https://github.com/kishoreshiraguppi/portfolio-website",
          }),
          i.a.createElement(de, {
            title: "Movieland",
            icons: v,
            description: "A portal to discover the latest movies available",
            image: Ne.a,
            imageTitle: "Movieland screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/portfolio-website/",
            githubLink:
              "https://github.com/kishoreshiraguppi/portfolio-website",
          }),
          i.a.createElement(de, {
            title: "Venkateshwara Temple Website",
            icons: y,
            description:
              "This is a project done to provide information about this temple place.",
            image: Se.a,
            imageTitle: "Temple site screenshot",
            projectLink: "https://github.com/kishoregs/catch-me-if-you-can",
            githubLink: "https://github.com/kishoregs/catch-me-if-you-can",
          }),
          i.a.createElement(de, {
            title: "To-Do List",
            icons: E,
            description:
              "A to-do list application made with Reactjs and Redux. Features include the ability to sort tasks, a fully responsive design, and a dark mode and a pink mode.",
            image: ue.a,
            imageTitle: "To-do List screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/react-to-do-list/",
            githubLink: "https://github.com/kishoreshiraguppi/react-to-do-list",
          }),
          i.a.createElement(de, {
            title: "Game : Catch-Me-If-You-Can",
            icons: y,
            description: "A simple game made with JS.",
            image: fe.a,
            imageTitle: "Game screenshot",
            projectLink: "https://github.com/kishoregs/catch-me-if-you-can",
            githubLink: "https://github.com/kishoregs/catch-me-if-you-can",
          })
        );
      };
      var Ce = () => {
        const e = Object(c.a)({
          div: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.2rem",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
          text: { color: "#eeeeee" },
        })();
        return i.a.createElement(
          s.a,
          { className: e.div },
          i.a.createElement(
            f.a,
            { className: e.text },
            new Date().getFullYear(),
            " \xa9 Kishore Shiraguppi"
          )
        );
      };
      var Ie = function () {
        return i.a.createElement(
          l.a,
          { theme: I },
          i.a.createElement(y, null),
          i.a.createElement(L, null),
          i.a.createElement(V, null),
          i.a.createElement(ze, null),
          i.a.createElement(le, null),
          i.a.createElement(Ce, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var je = t(149);
      o.a.render(
        i.a.createElement(
          i.a.StrictMode,
          null,
          i.a.createElement(je.a, null),
          i.a.createElement(Ie, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then((e) => {
              e.unregister();
            })
            .catch((e) => {
              console.error(e.message);
            });
    },
    64: function (e, a, t) {
      e.exports = t.p + "static/media/background.7147fc0c.jpg";
    },
    65: function (e, a, t) {
      e.exports = t.p + "static/media/background2.25d5f08d.jpg";
    },
    66: function (e, a, t) {
      e.exports = t.p + "static/media/kishore-pro.a014a6f0.png";
    },
    75: function (e, a, t) {
      e.exports = t.p + "static/media/ToDoListScreenshot.497599d7.jpg";
    },
    76: function (e, a, t) {
      e.exports = t.p + "static/media/PortfolioWebsiteScreenshot.20568a6d.JPG";
    },
    77: function (e, a, t) {
      e.exports = t.p + "static/media/CMIC.94a502b4.JPG";
    },
    78: function (e, a, t) {
      e.exports = t.p + "static/media/sd-fp.ea4a0fb0.png";
    },
    79: function (e, a, t) {
      e.exports = t.p + "static/media/qh-fp.e710e4ef.png";
    },
    80: function (e, a, t) {
      e.exports = t.p + "static/media/ml-fp.9ee50ca6.png";
    },
    81: function (e, a, t) {
      e.exports = t.p + "static/media/kvk-fp.892bd8f3.png";
    },
    92: function (e, a, t) {
      e.exports = t(106);
    },
    97: function (e, a, t) {},
    98: function (e, a, t) {},
  },
  [[92, 1, 2]],
]);
//# sourceMappingURL=main.c3ef8344.chunk.js.map
