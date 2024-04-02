(this["webpackJsonpportfolio-website"] =
  this["webpackJsonpportfolio-website"] || []).push([
  [0],
  {
    106: function (e, a, t) {
      e.exports = t.p + "static/media/cssart.949a49b4.jpg";
    },
    107: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        i = t.n(n),
        r = t(9),
        o = t.n(r),
        l = (t(98), t(149)),
        c = (t(99), t(129)),
        s = t(151),
        m = t(130),
        p = t(152),
        d = t(133),
        h = t(134),
        u = t(135),
        g = t(136),
        E = t(137),
        b = t(138),
        f = t(139),
        k = t(40),
        y = t(153),
        w = t(63),
        v = t.n(w);
      var x = () => {
          const e = Object(c.a)({
              lnk: {
                textDecoration: "none",
                color: "inherit",
                "&:hover": { textDecoration: "none" },
              },
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
              text: { fontSize: "1.2rem", color: "White" },
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
            w = i.a.createElement(
              s.a,
              { className: e.div },
              i.a.createElement(
                m.a,
                { className: e.button, onClick: () => l("About") },
                "About"
              ),
              i.a.createElement(
                "a",
                {
                  href: "/kishoregs/Kishore.Shiraguppi.CV.2024.pdf",
                  className:
                    "MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-button-12",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  download: !0,
                  style: { textDecoration: "none", color: "white" },
                },
                "Resume"
              ),
              i.a.createElement(
                m.a,
                { className: e.button, onClick: () => l("Projects") },
                "Projects"
              ),
              i.a.createElement(
                m.a,
                { className: e.button, onClick: () => l("Contact") },
                "Contact"
              )
            ),
            x = i.a.createElement(
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
                  ["ABOUT", "RESUME", "PROJECTS", "CONTACT"].map((a, t) =>
                    "resume" === a.toLowerCase()
                      ? i.a.createElement(
                          "a",
                          {
                            key: a,
                            href: "/kishoregs/Kishore.Shiraguppi.CV.2024.pdf",
                            className:
                              "MuiTypography-root MuiListItemText-primary makeStyles-listItemText-278 MuiTypography-body1 MuiTypography-displayBlock",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            download: !0,
                            style: {
                              textDecoration: "none",
                              display: "block",
                              padding: "8px 16px",
                              color: "white",
                            },
                          },
                          a
                        )
                      : i.a.createElement(
                          h.a,
                          {
                            button: !0,
                            component: "a",
                            key: a,
                            href: "#" + o(a),
                          },
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
                i.a.createElement(v.a, null)
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
                { to: "/", className: e.lnk },
                i.a.createElement(
                  k.a,
                  { variant: "h6", className: e.lnk },
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
                )
              ),
              i.a.createElement(y.a, { xsDown: !0 }, w),
              i.a.createElement(y.a, { smUp: !0 }, x)
            )
          );
        },
        N = t(140),
        T = t(64),
        S = t.n(T),
        C = t(65),
        I = t.n(C),
        z = t(83);
      var j = Object(z.a)({
          palette: {
            type: "light",
            primary: { light: "#e5ffff", main: "#1e6cae", dark: "#82ada9" },
            secondary: { light: "#62727b", main: "#37474f", dark: "#82ada9" },
            background: { default: "#eeeeee" },
          },
        }),
        D = t(55),
        L = t.n(D);
      var M = () => {
          const [e, a] = Object(n.useState)(!1);
          Object(n.useEffect)(() => {
            const e = () => {
              a(window.scrollY > 100);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []);
          const t = Object(c.a)({
              background: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "95vh",
                backgroundImage: "url(".concat(S.a, ")"),
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundSize: "cover",
                [j.breakpoints.down("xs")]: {
                  backgroundImage: "url(".concat(I.a, ")"),
                  backgroundPosition: "left center",
                  backgroundAttachment: "scroll",
                },
              },
              name: {
                position: "relative",
                top: "6rem",
                margin: "0.5rem 1rem",
                fontWeight: "bold",
                [j.breakpoints.down("xs")]: { top: "4rem", fontSize: "3.4rem" },
              },
              topText: {
                position: "relative",
                top: "6rem",
                margin: "0 1.4rem",
                [j.breakpoints.down("xs")]: { top: "4rem", fontSize: "2.5rem" },
              },
              bottomText: {
                position: "relative",
                top: "6rem",
                margin: "0 1.4rem",
                [j.breakpoints.down("xs")]: { top: "4rem", fontSize: "1.2rem" },
              },
              button: {
                position: "relative",
                top: "9rem",
                fontSize: "3.75rem",
                [j.breakpoints.down("xs")]: { top: "6rem", fontSize: "3.5rem" },
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
            r = (e) => {
              document.getElementById(e).scrollIntoView({ behavior: "smooth" });
            };
          return i.a.createElement(
            s.a,
            { className: t.background, id: "Top" },
            i.a.createElement(
              k.a,
              { className: t.topText, variant: "h3", align: "center" },
              "Hi, my name is"
            ),
            i.a.createElement(
              k.a,
              { className: t.name, variant: "h2", align: "center" },
              "Kishore Shiraguppi"
            ),
            i.a.createElement(
              k.a,
              { className: t.bottomText, variant: "h6", align: "center" },
              "Software professional & an aspiring generalist."
            ),
            i.a.createElement(
              g.a,
              {
                className: t.button,
                "aria-label": "Scroll Down",
                onClick: () => r("About"),
              },
              i.a.createElement("span", {
                className: "iconify",
                "data-icon": "bi:chevron-compact-down",
                "data-inline": "false",
              })
            ),
            i.a.createElement(
              y.a,
              { xsDown: !0 },
              e &&
                i.a.createElement(
                  N.a,
                  {
                    className: t.backToTopButton,
                    variant: "extended",
                    size: "small",
                    "aria-label": "Back to Top",
                    onClick: () => r("Top"),
                  },
                  i.a.createElement(L.a, null)
                )
            ),
            i.a.createElement(
              y.a,
              { smUp: !0 },
              e &&
                i.a.createElement(
                  N.a,
                  {
                    className: ""
                      .concat(t.backToTopButton, " ")
                      .concat(t.backToTopButtonMobile),
                    size: "small",
                    "aria-label": "Back to Top",
                    onClick: () => r("Top"),
                  },
                  i.a.createElement(L.a, null)
                )
            )
          );
        },
        B = t(143);
      const W = {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        P = {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        R = {
          ...j.typography.button,
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
      var O = t(66),
        H = t.n(O),
        J = t(141),
        V = t(142);
      var K = () => {
        const e = Object(c.a)({
            columnDiv: { ...W },
            mainDiv: { backgroundColor: "#e8e8e8", margin: "0 auto" },
            rowDiv: { ...P },
            rowDivider: { width: "70%" },
            divider: { ...A },
            headerText: { ...R },
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
                i.a.createElement(V.a, {
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
            k.a,
            {
              className: "".concat(e.skillsText, " ").concat(e.headerText),
              align: "center",
            },
            "My Skills & ",
            i.a.createElement("br", null),
            " Technologies"
          ),
          i.a.createElement(B.a, { classes: { root: e.divider } }),
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
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
                    i.a.createElement(V.a, {
                      className: "devicon-microsoftsqlserver-plain",
                      fontSize: "inherit",
                    })
                  ),
                  i.a.createElement(u.a, {
                    primary: "MSSQL",
                    classes: { primary: e.listItemText },
                  })
                ),
                i.a.createElement(y.a, { smUp: !0 }, a)
              )
            ),
            i.a.createElement(
              y.a,
              { xsDown: !0 },
              i.a.createElement(
                s.a,
                { className: e.columnDiv },
                i.a.createElement(d.a, null, a)
              )
            )
          ),
          i.a.createElement(
            k.a,
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
      var G = () => {
          const e = Object(c.a)({
            columnDiv: { ...W },
            mainDiv: {
              width: "60%",
              [j.breakpoints.down("sm")]: { width: "80%" },
              [j.breakpoints.down("xs")]: { width: "90%" },
              margin: "0 auto",
            },
            headerText: { ...R },
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
              [j.breakpoints.down("md")]: { width: "50%" },
              [j.breakpoints.down("sm")]: { width: "60%" },
              [j.breakpoints.down("xs")]: { width: "70%" },
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
                id: "About",
              },
              i.a.createElement(
                k.a,
                { className: "".concat(e.aboutText, " ").concat(e.headerText) },
                "About"
              ),
              i.a.createElement(B.a, { classes: { root: e.divider } }),
              i.a.createElement(
                k.a,
                { className: e.bodyText },
                "Hi there & welcome to my corner. This is ",
                i.a.createElement("b", null, "Kishore Shiraguppi"),
                ". Please read about my introduction & professional background. ",
                i.a.createElement("br", null),
                " I bring over 20 years of dedicated experience in the software development industry. My career has been driven by a genuine passion for programming and a commitment to continuous learning. This enthusiasm has not only shaped my approach to technology but also instilled in me a robust work ethic and the ability to swiftly adapt to new technologies. Beyond my professional endeavors, I dedicate considerable time to staying abreast of the latest trends in business, technology, and software development. My expertise spans a diverse range of domains, including Banking, Finance, Wealth Management, Municipal Markets, Fixed Income, Logistics, Insurance, Enterprise Frameworks, Manufacturing, and Construction. Throughout my career, I have contributed to various application development teams in capacities ranging from a full-stack engineer to a team leader and technical architect. My aspiration is to further enrich my experience and contribute significantly in roles related to management, leadership, and development. I am keen on exploring opportunities where I can leverage my comprehensive background to drive innovation and excellence. Thank you for reading through this. I am looking forward to the possibility of contributing to your team and embracing the challenges and learning opportunities it offers. Warm regards to you. You can download",
                " ",
                i.a.createElement(
                  "a",
                  {
                    href: "/kishoregs/Kishore.Shiraguppi.CV.2024.pdf",
                    className: e.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    download: !0,
                    style: { textDecoration: "none" },
                  },
                  "my detailed resume here."
                ),
                "  ",
                "Also",
                " ",
                i.a.createElement(
                  f.a,
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
                src: H.a,
                alt: "Kishore Shiraguppi",
                className: e.picture,
              })
            ),
            i.a.createElement(K, null)
          );
        },
        U = t(154),
        Y = t(144),
        q = t(72),
        F = t.n(q),
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
              rowDiv: { ...P },
              headerText: { ...R },
              contactText: {
                color: "#eeeeee",
                margin: "0.5rem",
                textShadow: "0.1rem 0.1rem #4f4f4f",
              },
              divider: { ...A },
              contactDivider: { backgroundColor: "#eeeeee" },
              emailText: {
                color: "#eeeeee",
                fontSize: "1.5rem",
                fontWeight: 500,
              },
              link: { fontSize: "1.5rem", fontWeight: 500 },
              icon: {
                color: "#eeeeee",
                margin: "0.1rem",
                [j.breakpoints.down("sm")]: { margin: "0.1.5rem" },
              },
              github: { fontSize: "1.5rem" },
              linkedIn: { fontSize: "1.5rem" },
              twitter: { fontSize: "1.5rem" },
              youtube: { fontSize: "1.5rem" },
              mailicon: { fontSize: "1.5rem" },
            })(),
            a = i.a.createElement(
              s.a,
              { className: e.rowDiv, id: "Contact" },
              i.a.createElement(
                U.a,
                { title: "Phone", arrow: !0, TransitionComponent: Y.a },
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
                U.a,
                { title: "WhatsApp", arrow: !0, TransitionComponent: Y.a },
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
                U.a,
                { title: "Email", arrow: !0, TransitionComponent: Y.a },
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
                U.a,
                { title: "LinkedIn", arrow: !0, TransitionComponent: Y.a },
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
                U.a,
                { title: "GitHub", arrow: !0, TransitionComponent: Y.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "GitHub link",
                    onClick: () => window.open("https://github.com/kishoregs/"),
                  },
                  i.a.createElement(F.a, { className: e.github })
                )
              ),
              i.a.createElement(
                U.a,
                { title: "Twitter", arrow: !0, TransitionComponent: Y.a },
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
                U.a,
                { title: "YouTube", arrow: !0, TransitionComponent: Y.a },
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
              k.a,
              { className: "".concat(e.headerText, " ").concat(e.contactText) },
              "Contact Me"
            ),
            i.a.createElement(B.a, {
              classes: {
                root: "".concat(e.divider, " ").concat(e.contactDivider),
              },
            }),
            a
          );
        },
        ce = t(145),
        se = t(146),
        me = t(147),
        pe = t(148);
      var de = (e) => {
          const a = Object(c.a)({
            card: {
              width: "50%",
              [j.breakpoints.down("md")]: { width: "60%" },
              [j.breakpoints.down("sm")]: { width: "75%" },
              [j.breakpoints.down("xs")]: { width: "90%" },
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
                  i.a.createElement(k.a, { className: a.title }, e.title),
                  e.icons,
                  i.a.createElement(k.a, { className: a.text }, e.description),
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
        ye = t.n(ke),
        we = t(79),
        ve = t.n(we),
        xe = t(80),
        Ne = t.n(xe),
        Te = t(81),
        Se = t.n(Te),
        Ce = t(82),
        Ie = t.n(Ce);
      t(106);
      var ze = () => {
        const e = Object(c.a)({
            columnDiv: { ...W },
            mainDiv: { width: "auto" },
            headerText: { ...R },
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
          a = i.a.createElement(V.a, {
            className: "devicon-tailwindcss-original",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          t = i.a.createElement(V.a, {
            className: "devicon-nextjs-plain colored",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          n = i.a.createElement(V.a, {
            className: "devicon-express-original colored",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          r = i.a.createElement(V.a, {
            className: "devicon-mongodb-plain",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          o = i.a.createElement(V.a, {
            className: "devicon-react-original",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          l = i.a.createElement(V.a, {
            className: "devicon-bootstrap-plain",
            fontSize: "inherit",
            style: { marginRight: "0.35rem" },
          }),
          m = i.a.createElement(V.a, {
            className: "devicon-javascript-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          p = i.a.createElement(V.a, {
            className: "devicon-html5-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          d = i.a.createElement(V.a, {
            className: "devicon-jquery-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          h = i.a.createElement(V.a, {
            className: "devicon-css3-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          u = i.a.createElement(V.a, {
            className: "devicon-nodejs-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          g = i.a.createElement(V.a, {
            className: "devicon-materialui-plain",
            fontSize: "inherit",
            style: { margin: "0 0.35rem" },
          }),
          E = i.a.createElement(s.a, { className: e.icons }, o, m, p, h),
          b = i.a.createElement(s.a, { className: e.icons }, o, u, m, g, p, h),
          f = i.a.createElement(
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
          y = i.a.createElement(s.a, { className: e.icons }, n, l, o, m, p, h),
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
          v = i.a.createElement(s.a, { className: e.icons }, m, p, h, l, d);
        s.a, e.icons, V.a;
        return i.a.createElement(
          s.a,
          {
            className: "".concat(e.columnDiv, " ").concat(e.mainDiv),
            id: "Projects",
          },
          i.a.createElement(
            k.a,
            { className: "".concat(e.projectText, " ").concat(e.headerText) },
            "Projects"
          ),
          i.a.createElement(B.a, {
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
            icons: f,
            description:
              "SocialDrink is a social media management solution for businesses.",
            image: ye.a,
            imageTitle: "SocialDrink screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/portfolio-website/",
            githubLink:
              "https://github.com/kishoreshiraguppi/portfolio-website",
          }),
          i.a.createElement(de, {
            title: "SmartMoney",
            icons: w,
            description:
              "Smart Money is a personal finance solution for individuals",
            image: Ie.a,
            imageTitle: "SmartMoney screenshot",
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
            image: ve.a,
            imageTitle: "QueueHero screenshot",
            projectLink:
              "https://kishoreshiraguppi.github.io/portfolio-website/",
            githubLink:
              "https://github.com/kishoreshiraguppi/portfolio-website",
          }),
          i.a.createElement(de, {
            title: "Movieland",
            icons: y,
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
            icons: v,
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
            icons: v,
            description: "A simple game made with JS.",
            image: fe.a,
            imageTitle: "Game screenshot",
            projectLink: "https://github.com/kishoregs/catch-me-if-you-can",
            githubLink: "https://github.com/kishoregs/catch-me-if-you-can",
          })
        );
      };
      var je = () => {
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
            k.a,
            { className: e.text },
            new Date().getFullYear(),
            " \xa9 Kishore Shiraguppi"
          )
        );
      };
      var De = function () {
        return i.a.createElement(
          l.a,
          { theme: j },
          i.a.createElement(x, null),
          i.a.createElement(M, null),
          i.a.createElement(G, null),
          i.a.createElement(ze, null),
          i.a.createElement(le, null),
          i.a.createElement(je, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Le = t(150);
      o.a.render(
        i.a.createElement(
          i.a.StrictMode,
          null,
          i.a.createElement(Le.a, null),
          i.a.createElement(De, null)
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
    82: function (e, a, t) {
      e.exports = t.p + "static/media/smart-money-ss.fba7ed71.png";
    },
    93: function (e, a, t) {
      e.exports = t(107);
    },
    98: function (e, a, t) {},
    99: function (e, a, t) {},
  },
  [[93, 1, 2]],
]);
//# sourceMappingURL=main.8df7b05f.chunk.js.map
