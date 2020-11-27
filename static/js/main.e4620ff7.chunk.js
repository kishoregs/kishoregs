(this["webpackJsonpportfolio-website"] =
  this["webpackJsonpportfolio-website"] || []).push([
  [0],
  {
    56: function (e, a, t) {
      e.exports = t.p + "static/media/background.7147fc0c.jpg";
    },
    57: function (e, a, t) {
      e.exports = t.p + "static/media/background2.25d5f08d.jpg";
    },
    58: function (e, a, t) {
      e.exports = t.p + "static/media/picture.dd217b77.jpg";
    },
    64: function (e, a, t) {
      e.exports = t.p + "static/media/ToDoListScreenshot.0bf97eb2.jpg";
    },
    65: function (e, a, t) {
      e.exports = t.p + "static/media/PortfolioWebsiteScreenshot.20568a6d.JPG";
    },
    66: function (e, a, t) {
      e.exports = t.p + "static/media/CMIC.94a502b4.JPG";
    },
    78: function (e, a, t) {
      e.exports = t(92);
    },
    83: function (e, a, t) {},
    84: function (e, a, t) {},
    91: function (e, a, t) {
      e.exports = t.p + "static/media/cssart.949a49b4.jpg";
    },
    92: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        i = t.n(n),
        r = t(9),
        o = t.n(r),
        c = (t(83), t(132)),
        l = (t(84), t(68)),
        m = t(113),
        s = t(134),
        p = t(114),
        d = t(135),
        u = t(117),
        b = t(138),
        h = t(118),
        g = t(119),
        E = t(120),
        f = t(121),
        k = t(39),
        w = t(136),
        x = t(55),
        v = t.n(x),
        y = function () {
          var e = Object(m.a)({
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
            a = Object(n.useState)(!1),
            t = Object(l.a)(a, 2),
            r = t[0],
            o = t[1],
            c = function () {
              o(!r);
            },
            x = function (e) {
              var a = e.split(" "),
                t = [];
              return (
                a.forEach(function (e) {
                  t.push(
                    e[0].toUpperCase() + e.slice(1, e.length).toLowerCase()
                  );
                }),
                t.join("")
              );
            },
            y = function (e) {
              document.getElementById(e).scrollIntoView({ behavior: "smooth" });
            },
            N = i.a.createElement(
              s.a,
              { className: e.div },
              i.a.createElement(
                p.a,
                {
                  className: e.button,
                  onClick: function () {
                    return y("AboutMe");
                  },
                },
                "About Me"
              ),
              i.a.createElement(
                p.a,
                {
                  className: e.button,
                  onClick: function () {
                    return y("Projects");
                  },
                },
                "Projects"
              ),
              i.a.createElement(
                p.a,
                {
                  className: e.button,
                  onClick: function () {
                    return y("Contact");
                  },
                },
                "Contact"
              )
            ),
            T = i.a.createElement(
              s.a,
              { className: e.div },
              i.a.createElement(
                d.a,
                {
                  variant: "temporary",
                  classes: { paper: e.drawerPaper },
                  anchor: "right",
                  open: r,
                  onClose: c,
                  ModalProps: { keepMounted: !0 },
                },
                i.a.createElement(
                  u.a,
                  { onClick: c },
                  ["ABOUT ME", "PROJECTS", "CONTACT"].map(function (a, t) {
                    return i.a.createElement(
                      b.a,
                      { button: !0, component: "a", key: a, href: "#" + x(a) },
                      i.a.createElement(h.a, {
                        primary: a,
                        classes: { primary: e.listItemText },
                      })
                    );
                  })
                )
              ),
              i.a.createElement(
                g.a,
                { onClick: c },
                i.a.createElement(v.a, null)
              )
            );
          return i.a.createElement(
            E.a,
            { position: "fixed", className: e.appBar },
            i.a.createElement(
              f.a,
              null,
              i.a.createElement(
                k.a,
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
              i.a.createElement(w.a, { xsDown: !0 }, N),
              i.a.createElement(w.a, { smUp: !0 }, T)
            )
          );
        },
        N = t(10),
        T = t(122),
        j = t(56),
        S = t.n(j),
        C = t(57),
        I = t.n(C),
        O = t(67),
        z = Object(O.a)({
          palette: {
            type: "light",
            primary: { light: "#e5ffff", main: "#1e6cae", dark: "#82ada9" },
            secondary: { light: "#62727b", main: "#37474f", dark: "#82ada9" },
            background: { default: "#eeeeee" },
          },
        }),
        D = t(48),
        B = t.n(D),
        M = function () {
          var e = Object(m.a)({
              background: Object(N.a)(
                {
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
                },
                z.breakpoints.down("xs"),
                {
                  backgroundImage: "url(".concat(I.a, ")"),
                  backgroundPosition: "left center",
                  backgroundAttachment: "scroll",
                }
              ),
              name: Object(N.a)(
                {
                  position: "relative",
                  top: "6rem",
                  margin: "0.5rem 1rem",
                  fontWeight: "bold",
                },
                z.breakpoints.down("xs"),
                { top: "4rem", fontSize: "3.4rem" }
              ),
              topText: Object(N.a)(
                { position: "relative", top: "6rem", margin: "0 1.4rem" },
                z.breakpoints.down("xs"),
                { top: "4rem", fontSize: "2.5rem" }
              ),
              bottomText: Object(N.a)(
                { position: "relative", top: "6rem", margin: "0 1.4rem" },
                z.breakpoints.down("xs"),
                { top: "4rem", fontSize: "1.2rem" }
              ),
              button: Object(N.a)(
                { position: "relative", top: "9rem", fontSize: "3.75rem" },
                z.breakpoints.down("xs"),
                { top: "6rem", fontSize: "3.5rem" }
              ),
              backToTopButton: {
                position: "fixed",
                bottom: "0",
                right: "0",
                margin: "1rem",
                zIndex: "99999",
              },
              backToTopButtonMobile: { margin: "0.8rem", marginBottom: "4rem" },
            })(),
            a = function (e) {
              document.getElementById(e).scrollIntoView({ behavior: "smooth" });
            };
          return i.a.createElement(
            s.a,
            { className: e.background, id: "Top" },
            i.a.createElement(
              k.a,
              { className: e.topText, variant: "h3", align: "center" },
              "Hi, my name is"
            ),
            i.a.createElement(
              k.a,
              { className: e.name, variant: "h2", align: "center" },
              "Kishore Shiraguppi."
            ),
            i.a.createElement(
              k.a,
              { className: e.bottomText, variant: "h6", align: "center" },
              "Software professional & an aspiring generalist."
            ),
            i.a.createElement(
              g.a,
              {
                className: e.button,
                "aria-label": "Scroll Down",
                onClick: function () {
                  return a("AboutMe");
                },
              },
              i.a.createElement("span", {
                className: "iconify",
                "data-icon": "bi:chevron-compact-down",
                "data-inline": "false",
              })
            ),
            i.a.createElement(
              w.a,
              { xsDown: !0 },
              i.a.createElement(
                T.a,
                {
                  className: e.backToTopButton,
                  variant: "extended",
                  size: "small",
                  "aria-label": "Back to Top",
                  onClick: function () {
                    return a("Top");
                  },
                },
                i.a.createElement(B.a, null),
                "Back to Top"
              )
            ),
            i.a.createElement(
              w.a,
              { smUp: !0 },
              i.a.createElement(
                T.a,
                {
                  className: ""
                    .concat(e.backToTopButton, " ")
                    .concat(e.backToTopButtonMobile),
                  size: "small",
                  "aria-label": "Back to Top",
                  onClick: function () {
                    return a("Top");
                  },
                },
                i.a.createElement(B.a, null)
              )
            )
          );
        },
        P = t(12),
        A = t(125),
        W = t(126),
        L = {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        J = {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        R = Object(P.a)(
          Object(P.a)({}, z.typography.button),
          {},
          {
            fontSize: "1.8rem",
            fontWeight: "bold",
            textShadow: "0.1rem 0.1rem 0.1rem rgba(178, 223, 219, 0.8)",
          }
        ),
        H = {
          backgroundColor: "black",
          width: "18rem",
          margin: "1rem",
          marginTop: "0",
          height: "0.12rem",
        },
        G = t(58),
        K = t.n(G),
        U = t(123),
        V = t(124),
        Y = function () {
          var e = Object(m.a)({
              columnDiv: Object(P.a)({}, L),
              mainDiv: { backgroundColor: "#e8e8e8", margin: "0 auto" },
              rowDiv: Object(P.a)({}, J),
              rowDivider: { width: "70%" },
              divider: Object(P.a)({}, H),
              headerText: Object(P.a)({}, R),
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
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement(V.a, {
                    className: "devicon-dot-net-plain",
                    fontSize: "inherit",
                  })
                ),
                i.a.createElement(h.a, {
                  primary: ".NET",
                  classes: { primary: e.listItemText },
                })
              ),
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement(V.a, {
                    className: "devicon-javascript-plain",
                    fontSize: "inherit",
                  })
                ),
                i.a.createElement(h.a, {
                  primary: "JavaScript",
                  classes: { primary: e.listItemText },
                })
              ),
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement(V.a, {
                    className: "devicon-csharp-plain",
                    fontSize: "inherit",
                  })
                ),
                i.a.createElement(h.a, {
                  primary: "C#",
                  classes: { primary: e.listItemText },
                })
              ),
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement(V.a, {
                    className: "devicon-git-plain",
                    fontSize: "inherit",
                  })
                ),
                i.a.createElement(h.a, {
                  primary: "Git",
                  classes: { primary: e.listItemText },
                })
              ),
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement(V.a, {
                    className: "devicon-electron-original",
                    fontSize: "inherit",
                  })
                ),
                i.a.createElement(h.a, {
                  primary: "Electron",
                  classes: { primary: e.listItemText },
                })
              ),
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement("span", {
                    className: "iconify",
                    "data-icon": "file-icons:vscode",
                    "data-inline": "false",
                    style: { fontSize: "2rem" },
                  })
                ),
                i.a.createElement(h.a, {
                  primary: "VSCode",
                  classes: { primary: e.listItemText },
                })
              ),
              i.a.createElement(
                b.a,
                null,
                i.a.createElement(
                  U.a,
                  { className: e.icon },
                  i.a.createElement(V.a, {
                    className: "devicon-wordpress-plain",
                    fontSize: "inherit",
                  })
                ),
                i.a.createElement(h.a, {
                  primary: "Wordpress",
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
            i.a.createElement(A.a, { classes: { root: e.divider } }),
            i.a.createElement(
              s.a,
              { className: "".concat(e.rowDiv, " ").concat(e.rowDivider) },
              i.a.createElement(
                s.a,
                { className: e.columnDiv },
                i.a.createElement(
                  u.a,
                  null,
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement(V.a, {
                        className: "devicon-react-original",
                        fontSize: "inherit",
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "Reactjs",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement("span", {
                        className: "iconify",
                        "data-icon": "simple-icons:redux",
                        "data-inline": "false",
                        style: { fontSize: "2rem" },
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "Redux & React Hooks",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement(V.a, {
                        className: "devicon-html5-plain",
                        fontSize: "inherit",
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "HTML",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement(V.a, {
                        className: "devicon-css3-plain",
                        fontSize: "inherit",
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "CSS",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement(V.a, {
                        className: "devicon-nodejs-plain",
                        fontSize: "inherit",
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "NodeJS",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement(V.a, {
                        className: "devicon-angularjs-plain",
                        fontSize: "inherit",
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "Angular",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      U.a,
                      { className: e.icon },
                      i.a.createElement(V.a, {
                        className: "devicon-jquery-plain",
                        fontSize: "inherit",
                      })
                    ),
                    i.a.createElement(h.a, {
                      primary: "Jquery",
                      classes: { primary: e.listItemText },
                    })
                  ),
                  i.a.createElement(w.a, { smUp: !0 }, a)
                )
              ),
              i.a.createElement(
                w.a,
                { xsDown: !0 },
                i.a.createElement(
                  s.a,
                  { className: e.columnDiv },
                  i.a.createElement(u.a, null, a)
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
              "TypeScript"
            )
          );
        },
        q = function () {
          var e,
            a,
            t = Object(m.a)({
              columnDiv: Object(P.a)({}, L),
              mainDiv:
                ((e = { width: "60%" }),
                Object(N.a)(e, z.breakpoints.down("sm"), { width: "80%" }),
                Object(N.a)(e, z.breakpoints.down("xs"), { width: "90%" }),
                Object(N.a)(e, "margin", "0 auto"),
                e),
              headerText: Object(P.a)({}, R),
              aboutText: { marginTop: "6rem" },
              divider: Object(P.a)({}, H),
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
              picture:
                ((a = {
                  maxHeight: "100%",
                  maxWidth: "100%",
                  margin: "1rem",
                  marginBottom: "6rem",
                  width: "40%",
                }),
                Object(N.a)(a, z.breakpoints.down("md"), { width: "50%" }),
                Object(N.a)(a, z.breakpoints.down("sm"), { width: "60%" }),
                Object(N.a)(a, z.breakpoints.down("xs"), { width: "70%" }),
                Object(N.a)(a, "boxShadow", "8px 8px 12px rgba(0, 0, 0, 0.25)"),
                a),
            })();
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              s.a,
              {
                className: "".concat(t.columnDiv, " ").concat(t.mainDiv),
                id: "AboutMe",
              },
              i.a.createElement(
                k.a,
                { className: "".concat(t.aboutText, " ").concat(t.headerText) },
                "About Me"
              ),
              i.a.createElement(A.a, { classes: { root: t.divider } }),
              i.a.createElement(
                k.a,
                { className: t.bodyText },
                "My name is ",
                i.a.createElement("b", null, "Kishore Shiraguppi"),
                " and I have been working in software development space since last 16 years. I really enjoy programmming and love to be always learning something new. I have a strong work ethic, and can quickly pick up on new technologies. ",
                i.a.createElement("br", null),
                " ",
                i.a.createElement("br", null),
                "I spend much of my free time learning about latest trends in business, technologies, code/projects etc. I have experience working for a variety of industries namely finance, logistics, engineering etc on application development teams as a full stack engineer. I am interested in gaining experience & growing in management, leadership, developer roles of any kind. You can find my",
                " ",
                " ",
                i.a.createElement(
                  W.a,
                  {
                    onClick: function () {
                      document
                        .getElementById("Contact")
                        .scrollIntoView({ behavior: "smooth" });
                    },
                    className: t.link,
                    underline: "none",
                  },
                  "contact information and links here"
                ),
                "."
              ),
              i.a.createElement(s.a, {
                component: "img",
                src: K.a,
                alt: "Kishore Shiraguppi",
                className: t.picture,
              })
            ),
            i.a.createElement(Y, null)
          );
        },
        $ = t(137),
        F = t(127),
        Q = t(61),
        X = t.n(Q),
        Z = t(60),
        _ = t.n(Z),
        ee = t(62),
        ae = t.n(ee),
        te = t(63),
        ne = t.n(te),
        ie = function () {
          var e = Object(m.a)({
              mainDiv: {
                backgroundColor: "rgba(0, 0, 0, 0.92)",
                position: "relative",
                bottom: "0",
                marginTop: "5rem",
              },
              columnDiv: Object(P.a)({}, L),
              rowDiv: Object(P.a)({}, J),
              headerText: Object(P.a)({}, R),
              contactText: {
                color: "#eeeeee",
                margin: "0.5rem",
                textShadow: "0.1rem 0.1rem #4f4f4f",
              },
              divider: Object(P.a)({}, H),
              contactDivider: { backgroundColor: "#eeeeee" },
              emailText: {
                color: "#eeeeee",
                fontSize: "1.1rem",
                fontWeight: 500,
              },
              link: { fontSize: "1.1rem", fontWeight: 500 },
              icon: Object(N.a)(
                { color: "#eeeeee", margin: "0.5rem" },
                z.breakpoints.down("sm"),
                { margin: "0.1rem" }
              ),
              github: { fontSize: "2.2rem" },
              linkedIn: { fontSize: "2.7rem" },
              twitter: { fontSize: "2.6rem" },
              youtube: { fontSize: "3rem" },
            })(),
            a = i.a.createElement(
              s.a,
              { className: e.rowDiv, id: "Contact" },
              i.a.createElement(
                $.a,
                { title: "LinkedIn", arrow: !0, TransitionComponent: F.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "LinkedIn Link",
                    onClick: function () {
                      return window.open(
                        "https://www.linkedin.com/in/kishore-shiraguppi-a5a204b/"
                      );
                    },
                  },
                  i.a.createElement(_.a, { className: e.linkedIn })
                )
              ),
              i.a.createElement(
                $.a,
                { title: "GitHub", arrow: !0, TransitionComponent: F.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "GitHub link",
                    onClick: function () {
                      return window.open("https://github.com/kishoregs/");
                    },
                  },
                  i.a.createElement(X.a, { className: e.github })
                )
              ),
              i.a.createElement(
                $.a,
                { title: "Twitter", arrow: !0, TransitionComponent: F.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "Twitter link",
                    onClick: function () {
                      return window.open("https://twitter.com/kishoregs4u");
                    },
                  },
                  i.a.createElement(ae.a, { className: e.twitter })
                )
              ),
              i.a.createElement(
                $.a,
                { title: "YouTube", arrow: !0, TransitionComponent: F.a },
                i.a.createElement(
                  g.a,
                  {
                    className: e.icon,
                    "aria-label": "YouTube link",
                    onClick: function () {
                      return window.open(
                        "https://www.youtube.com/kishoregs4u/"
                      );
                    },
                  },
                  i.a.createElement(ne.a, { className: e.youtube })
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
            i.a.createElement(A.a, {
              classes: {
                root: "".concat(e.divider, " ").concat(e.contactDivider),
              },
            }),
            i.a.createElement(
              s.a,
              { className: e.rowDiv },
              i.a.createElement(k.a, { className: e.emailText }, "Email:\xa0"),
              i.a.createElement(
                W.a,
                { href: "mailto:kishor4u@gmail.com", className: e.link },
                "kishor4u@gmail.com"
              )
            ),
            a
          );
        },
        re = t(128),
        oe = t(129),
        ce = t(130),
        le = t(131),
        me = function (e) {
          var a,
            t = Object(m.a)({
              card:
                ((a = { width: "50%" }),
                Object(N.a)(a, z.breakpoints.down("md"), { width: "60%" }),
                Object(N.a)(a, z.breakpoints.down("sm"), { width: "75%" }),
                Object(N.a)(a, z.breakpoints.down("xs"), { width: "90%" }),
                a),
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
            { className: t.div },
            i.a.createElement(
              re.a,
              { className: t.card },
              i.a.createElement(
                oe.a,
                null,
                i.a.createElement(
                  ce.a,
                  null,
                  i.a.createElement(k.a, { className: t.title }, e.title),
                  e.icons,
                  i.a.createElement(k.a, { className: t.text }, e.description),
                  i.a.createElement(le.a, {
                    className: t.image,
                    component: "img",
                    image: e.image,
                    title: e.imageTitle,
                  })
                )
              )
            )
          );
        },
        se = t(64),
        pe = t.n(se),
        de = t(65),
        ue = t.n(de),
        be = t(66),
        he = t.n(be),
        ge =
          (t(91),
          function () {
            var e = Object(m.a)({
                columnDiv: Object(P.a)({}, L),
                mainDiv: { width: "auto" },
                headerText: Object(P.a)({}, R),
                projectText: { marginTop: "5rem" },
                divider: Object(P.a)({}, H),
                projectsDivider: { paddingBottom: "0.15rem" },
                icons: {
                  fontSize: "1.5rem",
                  display: "flex",
                  width: "100%",
                  margin: "0.5rem 0",
                },
              })(),
              a = i.a.createElement(V.a, {
                className: "devicon-react-original",
                fontSize: "inherit",
                style: { marginRight: "0.35rem" },
              }),
              t = i.a.createElement(V.a, {
                className: "devicon-javascript-plain",
                fontSize: "inherit",
                style: { margin: "0 0.35rem" },
              }),
              n = i.a.createElement(V.a, {
                className: "devicon-html5-plain",
                fontSize: "inherit",
                style: { margin: "0 0.35rem" },
              }),
              r = i.a.createElement(V.a, {
                className: "devicon-css3-plain",
                fontSize: "inherit",
                style: { margin: "0 0.35rem" },
              }),
              o = i.a.createElement("span", {
                className: "iconify",
                "data-icon": "simple-icons:material-ui",
                "data-inline": "false",
                style: { margin: "0 0.35rem" },
              }),
              c = i.a.createElement(s.a, { className: e.icons }, a, t, n, r),
              l = i.a.createElement(s.a, { className: e.icons }, a, t, o, n, r),
              p = i.a.createElement(s.a, { className: e.icons }, t, n, r);
            s.a, e.icons, V.a;
            return i.a.createElement(
              s.a,
              {
                className: "".concat(e.columnDiv, " ").concat(e.mainDiv),
                id: "Projects",
              },
              i.a.createElement(
                k.a,
                {
                  className: "".concat(e.projectText, " ").concat(e.headerText),
                },
                "Projects"
              ),
              i.a.createElement(A.a, {
                className: "".concat(e.divider, " ").concat(e.projectsDivider),
              }),
              i.a.createElement(me, {
                title: "Portfolio Website",
                icons: l,
                description:
                  "This portfolio website, created to display my projects and skills as well as other information about me.",
                image: ue.a,
                imageTitle: "Portfolio website screenshot",
                projectLink: "https://kishoreshiraguppi.github.io/kishoregs/",
                githubLink: "https://github.com/kishoreshiraguppi/kishoregs",
              }),
              i.a.createElement(me, {
                title: "Catch-Me-If-You-Can",
                icons: p,
                description: "A simple game made with JS.",
                image: he.a,
                imageTitle: "Game screenshot",
                projectLink: "https://github.com/kishoregs/catch-me-if-you-can",
                githubLink: "https://github.com/kishoregs/catch-me-if-you-can",
              }),
              i.a.createElement(me, {
                title: "Sticky-ToDos-App",
                icons: c,
                description: "A to-do list application made with Reactjs.",
                image: pe.a,
                imageTitle: "Sticky-ToDos-App screenshot",
                projectLink:
                  "https://kishoreshiraguppi.github.io/sticky-todos-app/",
                githubLink:
                  "https://github.com/kishoreshiraguppi/sticky-todos-app",
              })
            );
          }),
        Ee = function () {
          var e = Object(m.a)({
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
              "2020 \xa9 Kishore Shiraguppi"
            )
          );
        };
      var fe = function () {
        return i.a.createElement(
          c.a,
          { theme: z },
          i.a.createElement(y, null),
          i.a.createElement(M, null),
          i.a.createElement(q, null),
          i.a.createElement(ge, null),
          i.a.createElement(ie, null),
          i.a.createElement(Ee, null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var ke = t(133);
      o.a.render(
        i.a.createElement(
          i.a.StrictMode,
          null,
          i.a.createElement(ke.a, null),
          i.a.createElement(fe, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[78, 1, 2]],
]);
//# sourceMappingURL=main.e4620ff7.chunk.js.map
