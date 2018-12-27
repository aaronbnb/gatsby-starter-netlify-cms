import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import mainSectionStyles from "./main-section.module.css"


const MainSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainSectionQuery {
          site {
            siteMetadata {
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
          <section className={mainSectionStyles.section}>
          <div className={mainSectionStyles.hero}>
          <div className={mainSectionStyles.contained}>
            <h1 className={mainSectionStyles.title}>I'm a web developer and teacher that helps make
             technology that's accessible to developers and users.</h1>
            <h2 className={mainSectionStyles.subtitle}>{data.site.siteMetadata.description}
            </h2>
          </div>
          <div className={mainSectionStyles.socialcontainer}>
            <aside className={mainSectionStyles.social}>
              <p>G</p>
              <p>L</p>
              <p>T</p>
              <p>I</p>
            </aside>
          </div>
          </div>
       
          <div>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFRUXGBcaFxcYFxgYGhodHRgYGxcYFxgdHyggHxolGxcYITEiJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABFEAACAAQEAwUEBwYEBAcAAAABAgADBBEFEiExBkFREyJhcYEHMpGhFEJSscHR8BUjM2Jy4YKSsvEWF0OiJDRTY3Ozwv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACURAAICAgICAwACAwAAAAAAAAABAhEDIRIxEyIEQVEUYTJxgf/aAAwDAQACEQMRAD8A0HAKHs0Vegg4ohqnSwh0tGpUqMbFM2ih8cscunWLrOni0VbGsrnXWAyOoh41ckUilw8nV9T06RNahBEEpku3KGCfCJU9noarQGnSrQu0EPYmCAdNPKK3U1+WPWxy9Tx80ffQbmYgoG8CqjFbtvACsxK8Q6eeS14Cc7QeONOzSMBbORrGjYZKsIyfAMUCkGNCw3GlYaG5tyiGK9tlmWTaRaSQIG4jMW0Qp+Ikg2IHmYAYhU57gVKqf6Sfxh+/pEv/AE7FQM9h1g/IzFdIqOE4XMSZmmMHBOjKbg/lF/okFoWk3Ic2lGgJPw6Y17mBVRw+1j3jF8WWIbnSgRDn1QmMqdmYVWDaEEQPTh8X2jQq/Dr6iBfY20IiRuS0ehFwkrAVLgQ1uL/r7o9qMImyxeXcc4u2H0g00gm1CCNobiTTtiM010jGp+IzicrE/r8I5lS7n4RpWJ8IyphJtrFcxHhV5feQk25RRkkmiaFcgalILDXl4x7Df0lhplOmm0KIi31NlTaIdfOygxJV4GYue6YqIuytzMXZnKjlEiTLzbwMpZHeJPMmCqTLRG5NvZesaSG6qmEQKKUC9oI1ZuIgUMoiYGvGXs5vQc/YystiIq2M+zxXJKMRflyjQ6KYCImZBFqbo8+St2fPeN+z+olAsvfA+MVaVTPmy5SCN4+pamkDDaKRjHCiGZnCgHnpAybSCh3TMyoMMYANMYhL8tzpfTl6nQROquJJQXs5Qmot95bhSfFmsSdYgcVYj2jmWhyyV0B2zePleAktgBzv1MMhGu+zZu3QTNYDqGmDxZ7/AICPDjjJ7igk8273ygaGLMFUFmJsFAJJPgBqfSCacNzR/HaXTg8pjd8+SC5+MbKaj2DGDl0X3g7GqYy1afUy5V02MwBhMDEMDLA0UixB153g9wXxKJ5eUzKzIzBXX3Zig6EeNrGKbhPs+p3AZpruDzUhR90RpWEimqM1JOdXQ3yzFLS2t9UzALrfa5uIV5YMZLEzag0e5ortPj6MivtmUGx3Fxex8Y6/banYwdoVQanEWgDiM1QYh13EIA03gFVYg8zaEzkh2OLLRQ4qoNiYsVLVhhvGW0uHzGe+YxfcFp2Uax0JNm5IpFhENzqcER6jR2zw4SBWwdLnQfAQoJGYIUZRhyjxFrdRD9oHYjMIBjaOTpghwAxjtiBA41V2hT6iwMQyVM9OO0jufWKNI6ktfURWp1QS/rFhw+eLRhzQdw6sIIEWKnm3EUaoqxcEb3i1YTNuovFGOX0SZoKO0FjEOqlAxLEMVA0hrEHzBidIZc+ajbo7LbyO/ltDVJIea4RBc8zrYDmSeQ++ND9oHDytV5/3l5q3Cy1VjdfeY5iABYD1MBMMpFp1IRi97ZyyFGU8lZTtpygJ5klrsox4HJ2+izcKUKUcsuq5pjCxcjX+y+AgRjLOZZmS5fvPlLlbknU3udbeWmu8W7hchhZlFuV4J4tSKwFxcDbl6RLGTe3sqkknS0AeEqN2k53Ns2yjfTcnpzgDilBVrUAy2N7tlXrYXF9h3tRfrFxq8Wl08kNkZiDZUli7MeSrECj4onTWQNSZSXsy51LSxrZvHYXA1jVSMlbBbUk0zrTAVuqkrtYlRf5gwfpcPAWJWMIGMqaOYyn0Nx95hoTcojWwIpNAyvw4HXnCpKSwiTOqbx1S985RA8thqKSJ+DIC20WynlaQOwrDcsG0W0VY9LZFlab0MssNTgbRKcQ2whooCsYUTjIEeRxxKCxAxGnuIml44bWNQLKTNw9sxsNIebCyRFoNMLw59G8IVPGpOx2PNKKoz2bhdjreE1ORtFzraC8AKuXlOoiaceLLsWTkiDJpiTeLthK2URU5DaiLZhr6CCxPYr5C0FgYbmGPLx4UhzkQOzPeNsZkS66RKbR+zck7BcxAQHoTlb5QKSmSTSTCzqWmNmdm0Oe9ha+pFstvGKJxJXmqqZ08n+I5K+CDSWP8oWPMJoWqCFec2VLEKSWFt9ATYQrJBdnoYZulBl5wbFuzAgsmMh7Kef6MUedP7JynK/d9donUM7MwI08YS19lKp9h/FOM6aWGlg6LoCtrsbahfxMCMHxJpj/uqY6G+dy67nVhMy20BOnOCWHYJSgMZyLNJN+8oNugF9YYxDH0RhLl06so0A0AHoN4JNPoFR/SxT6gCyh84sCTpvrvEedNEMYoALMq5cwDEDygJMr7G0D2zFVaJdVNJOgg5wupBu28CMLXObxZqaTlF4PjQic70WqROFobnYmi7kRVp9a2wNoYSSW1Jgnl/AI4b2yzHGEOxjuXXg84rQphyiVIW0assjp4UixdpCgIKk9fnChvNiuAbYxyphTYZR9YcTk1Fh4LDMtocvCpSGqJxOQGAGLUd9osBERp8i8KmuQ/HLiyoypJHKLBh1wIGzMSpVmFGmqGG9zZR4Ztr+EH6VAQCpBHIg3EDGEl2HPIpEmWY9rJZaVMVfeZGC+ZUgfOEqw6DDExB8111C0slGUqV0s2hBHIw7gj5JwPXQx9E1VFKm/xJSP/AFIrfeIrnFWCSEpZrJIlKwAIKooPvDmBHS6DhL2RnnEeGidLDgWYcxFYw7ETLazfH+0XvCzmQqeUC8U4fkOtytiOdyD4WieMl0yyUXdxBH/FwQZXW563tEQ8ULnUoqja+nP1it1uHsHK5rgbX39Ys/B2Dyg4mOuZgbrm1APUDa/nD+EErJ3kndGk4fRvOkq8xcrML26DkP11gdV4IL84tuFYlLmggalLByLWBtte+8dfu31UhgeYjvGk7F+WVUV/B8PycoMz/dib2AAvsP1pEOpttBTjq0Li97BS6tE7YRBmLY6GO0nRNZ6EejszrGJDVIAiC5G8BcZxPIsHBWwMnVhRsR8fvhRm746bmFFfhIOZ9ATNoh21j2ZUiGUnAmBlkS0bHE3sKSjGd8XcfzxPajoZLNNU5WYIXYf0ry8zGgSGh4AA3sLnc9fOA5U7DoxHFcGxyZLabUO6S11ImT1XnawRCfhDGCVolBgrsQo/ezWY6n7EsbDz1NuetovftfxApSqgNsxZj6CwB9Wv6RkFLTzJ/wBHpJejTWtbbU7k+QvFEH62xcu6QYxCeJn/AIi4Cj3bjTwsD4xOwTjqplZrMrMVADMAcmu+W4HMaxV8frjkSUoygaEeWm8BaacR+t4JyXQKibbRceVaTFE8Sml/WZe5oNGZAbMTz2IPLQwdl+0mhL5czhftlDbzIGsYHKr8oNgNRb5RxJnO1rXsxsDY2367f7QLjF9hWz6upZ6uodGDKRcEbEdYpnFXF0l3FHJ/emarFpisCqZTe38xNuUR8GqcklZTA5coUjkdLWgFiPAyu3aU9QZTDYMLgeAYEH5GJIzhJNWUPHKLurPae8tvCPcQlXB53gPXYNi0safvQPrJkY/AgNFaxHFa1TlmzJqeBQofhYHpGL40n00OfyIr6YcOCpKDTHtz97UfPn+cAq3GsgK0+5Fiw5eUC50xnN2Z3P8AOT+N487JiQiLdmNgBuT0h8cPHt2TzzctRVBjh/Hp0qSyLMKpcs2guzk6XO+gUfoxYeEKlxUtUNNMuQWdgCb3JBaYEXpbW+23O16tUSpUhRLGV5p3cm6J1Cge8R126QqmeVe6uxVAAC2h0GZjYbd7W3gIa0Isv/EVQKlz9Iqmky1HdkybFlv7vaMe6HtrbUjnaGaPHWUCVKZ59rWmT2VLD+YqCSB1I9TGfUtQzEAk2BJPO5Nrnz/IdIKS8ZVT3SwUH/p6zCfGZshPMiBo2zWKDDHMsTJ7rLzE5AgeYWtzsVUjXQaa6dRHVVQFACCGU2swvzFwCNwbEHXrADgXiyTVFKV7ypiFuyztmzq2ryrqVN9LjrtrGkzaZGW6rbSxQd0HT3W6EaEHlYQqeJNf2NjlcP8ARRZt7bRUeIqZmjQzRd8qdRyPUcjEDFcJFiYDFFp2HnyJqkZOaB/0TCi7GgHQfOFFnIitlmqKpr+UdSq228dY/ZLmKO+L3eynnEOTE7svw5otUzWMPn3G8T2MVnh2cSgv0g+ZukYnoGS2Zp7bb9nKPKz+VwQdfj8ozmtrDIqJc6nYpksUawuO7rv5kR9B1UqXMsJiK4BuAyhgD1F9jFXn+zSkmOr55lxMVypylCoOssrbYjQmHQyqqYEobsxOajziFRGmMdgqlmPPQDU6RKk8JV5F1oqi3/xOPvF4+i5HDNGk9amXISXNRcqlLqALW9wd3Y2vaIXFfFMukXe7kd1R9/lG8nJ6BpIxTCeBKuY156GnlL7zTNDboqDUn4QdxivnN2Uo2aUkxXZwe6QgOQFTqNT48tYbxDimdOY5zYHlyHSGqgAKt/rfIeMa432Cp0y9YbicuYFDd1vlBYSxfRoyGsxApMHZmw0+MGsM4qmLo2o5xHLDKOy6OWE+nTNJSYVNjpEhiGFmAYdGAPyMV7D+IEmACCqThuDAKdBOH6RKvhahmXzUyAnnLvLP/aRAz/l5Sgs0mdNlMRYFrOFHPLsQTte97ecWAzDyIhmbVldxDY5pIW8KZQMT9ltVe8mZKnCx55Gvp9VtOv1ucVniDDKinLS5kl0JYZSy2Uggg2b3Ta3XnGv4djQY22PIdYOy6xXGVgCOjAMvwMOjmvsTLC0ZHw5wtPaUDJo+1YjWbPzqgvylyls3+JyPIR7jWD18pSJtNJKj/wBucF9GDC3xjbZNeNiLdOkKdO5HUGGeRfgrgfMsxpGa0yVMp2B0mSnZ1B5HI92tz0a8axwtx6JarKq5ozWBWeEJScvdGZ8tznsLZtPEQz7Q+CVmy3nyFs6glkA0YblgPtff5xlOC1Zv9Hfa5yX+qx3HkecGpKS0c01o+hKjEpcyX9IlOjoDYlTfKDtf1v8A5oCY1jMsIbEXtFCwITO/LlsV7TRlBsDzFxfkYsErAubEk+MKnkUQ8eHmgDMxZrnU7n9bQotQwFPs/KFAeYZ/Eide0apZEJWM/wCGzme5POL17Spw7MxmODVmVvCHTdx0T4o8ZbNlwuoCqImtio6xRKTFLrvESuxvLsYkUZN0Xy4pWzRPp4POJ1NUmMgouInMwa6RpuETs6A+EE8biJ8kZdBHFMdSRKaY5sBYfEgafGMhxuu+kT3m8ie6DyUaKPh98FfatiHdSnB1bvt5C4UfG59BFLw2oJte50+7lD8apbE5Wm9ExZNnsdjrHYqWDFlP4i3LzEeZ9Af14Q1axhogarVY6nc66bRzSzip12iYk3wiLOUX5eXrHHE+XUNLNxt98WrCMeDL3tR1il9p3bbw5hkwWmAHXRh4WOtvQ/KEZMCl0V4fkNal0aWmIdNo9auvz2ijUOJzNcoL5RdrAmw5k22ESxi4OxtfleInjlF0XRlGStFtkzEDB9ja0EVqxveKMuKjrHEqtJbuNYDzgkmdKKNLp6sHnE6XO8dIzaXXtmsrai+3hBenxkkAN98G5UTvHZdWqgNOsfOHGFMJNbOCaBZht4bMB8CI1zEMbWWhd2sBqYxXFK7t5s6ad3YuPLYD4W+ENwSbbFZoqKRovAjibNR+qEnz2P8A3XjQ3lDeMt9lM/8AiDmtvg391PxjR/pcDlfsMw3wJQWFEX6QIUBoaZzx7imclbxQkm2PSDPFJPaG94CARWlSoglLk7DtJXm1obqnZjEWh3t+MWSiwrPbSMtRCSlPSIGDULFg1o1DBJjBQDpEHBcHCgQfGGO4KyrByrBSTYA2NiSOQ3hDycmOWHjGzH+LMQ7epmuDpmIXyXQfdf1gLS1GU2PXTziXiVI0mdMlTNHlkqwvzBsbQNdLkAbki3xirolfZYe1Frnb7/SEzC14jVdk97S21/vA6w5WYdPSmSpaWeymGyEjqNCRuFbWxO9tIIGhpp0HcM4Oq6mX2iqEXLmUuff00soubH7RsIv3AuB0E6k/dyw7TZXfLlXa9hnRjuhDHYBeRF94OcN0f0enMia3dSwVjvpMKqWHVQZQPkTtGWbVGf8As8wCiqpSmcrvOBYOmewDKSQMoIIutt7i9xyiX7QKKQkqU8iWkog5GQBQSsy63uBZ9TLPO2sCqOifDca7M3yTs2QknW7ZlBJ3YTECeOa/ODXtFwqjRJk+YAJsxf3Uw5hYgM0tVAbU3st8vu89I1dnFx4PxuXUUqzJSooYqCCgFiTkZSt7WD8xbQiK5x/g9KsoTEkiW7PIsV0AEybkmArsSNbeY5CKx7KcT7s+Tci93W1iQWUNdQdLgyr+ZgnxlirTFkFDeS7Su8dyAyspN7WYOzZh/MvjAuKCU6egTxtw+lCJbLOMzPyy2I7tzz1Go+MBp0lpU1ZWYF2RW0O1/qEn6wg7x8j1M6kyi6sFY+RUE39JbRUsZDzJxmHunQjwteBWOLGLNIPTZjUT2qQZZYXF9bjmRbQwOrOMVGkqWf6m0v6DaFUTJlWZjTGZiFLKmYkA2UEKDoLgephqq4Sm/Rpc9RcEC5FyAGzlSxA0NgP8wEC8MVtm+eT6AeJ4vOn++2n2RsPz9Ygyjr6H7o6myiCQbi17iPZNOzHugwaSXQqUm9sufsuNpk4nbKg+ZMaXMk31jJuGakyGAIsCd/zjW8JqVdRE2WPtZZhknCjnsfOFBYUw6CFGUHaMc4zorOSBFSKxqHEVIJjHSKhV4Ow2X4CKrPMj0A6edYiNG4WmgqLjlAHCeEZjd5ha+0WjDMLMvSE5txss+LP3ossqYBFgwCYLsxK2A5m1gdyB1sIq6obRZKLDmakFmCs7B7nop90EbXA35XhGBXMo+S6iZ17bcHyVEuqVVVJqZWN7MZi3uWX+nKLjp8cvaYVsw3BvfxjTvbXS2akms13aSUZSTe6Ed4Dxzb87RmDocsXM89jbO01hc/kI3P2c1MmrwtqadZhKbsjf7LEZL9BqovyIB5RhCmx8+kXz2WYutNWiWzES6gdmx6N/0z8SR5kQJyLFwZTPhmKtSTDeVOBMtjpmy5rf4spcHxUeEaQmHNexbMVSYjBv+oO7kY/zDKl+oYQP4swP6VLBQqtVIKzEYXsri1rtbVTYBhyBB+rBClxQGQlQ37shf3isQCmS+YN/TZ0PUjyjbNoqXtMwlp1KtRKv2tOwdW52UA3J/oAbzlxZqnCpU6XL7dJbZWBs+VgLH6gIN7BnUG0VTiP2hypYeXTIJoN7s18g1bQDdrA8iAb84zGv4krJgyNUPkFlyqcgIAAGbLbNoBvfaNM0X/BcCSXi83JMAXs84AAFwZihrj6tjc2ts0ROKpKSlmSZjAJlYyzcBgVdlQgEg+7lUnmCOkUTDZrBZnZsyNYG6sQSL2YXFrjUH0gfUp3jfx8dfONZjot+G8cSxJEuokl2UHKcobztdhz1sQbHroAKquJZLOW+jM97e9NsLf4VuT1N73MAbC9jsdjHE2UV32tuIGjrDR4nIDBKaQoOhzZ3uOmrW+UPTOMqtpYlBpaIPqpKQDfxvb06CK4Y8Ecd0EcQmNOHaMe+Aqk2AuoAUXtzFhrBbgyb20xZLAX3BFtQNbHygTRvmFj/ALjnBv2c02WqdztLRh6sRb5XjkYy41HDS22iThQaUcpgys64hieFGtoKk+wFJx2gktRHkQRULCh/hgTfzcv4QqGn7VosFNgKaEqL+URuHpOVReLH2gtEiV9lq0iBMo1A2tAKcgL+EG62YTAeVIOaClG0ZGfGSH8ll2+G8Uqp4sqcPqp8sFWQTGBlPchjfUgXOXzEWjiDFFkKFPaKzapNQDuMDdSLixIIvY8oyjFMOngvNLdurEkzVuTc63dT3lPgYVhxVbKcuRyo64y4hevqO2ZcgyqqoGzBQOV+dzcnTnAWYthaHFS9iLWhT/KHE4OUWYecTTT2eykhhqtjuNwQesMFO+vQkffBCcmtiMyH3WG6np/aMONMmcdItPTVbMVqkHZTUB/iggg230FlcMRpe31jFWr+J5lST2k3Ml7iWtwoIAF7X1NlHeNz46wFJlFVLPmI5gfeIj19UlgstRfmbWjejXJskTpwY6aAQzLl87XiLJBsTEmTWAbiOBH6UBZg6MCp9Rb77R4V1PUafr1iP9KBOkEKpbtm5MA3x3+d/hBfRwOmycwt01EcyFv3G3G0TSwBHz8jv8oaeV3rfWUm3jb+0ZWjga0sglTDTjlBWdLvrsYhTZUYdY1TTSjA/GLRhVSJTlhoHA+V/wAD8oqjCCtI2aUV5jVfQXI+F45dnM0SRjII3hisxwdYoSVzbA6wlnk7m8OSQtplu/bi9YUVHO3j8/zhQ6xXj/s32lQKoh9ZgMNs/hDWbwiRDnZNVA0cvIA1iMlRaOjPvpHGRiRMSdSpVlDKdwQCDFLxDhkE5qZzKf7JJynXYNuPnF5my7jaIQkQuUWnaKseSNVIyHFpXZzClTLMuZa+dLa32JUHKwPhYwPmU/NSHHVdfiNxGkcY8HTprGelnuACnMAC3d689PGM8nYYAxVlZHHLb5HaOWZPs14n2iBU2N7HUa/q8T7EabhhmsefUA9Qb2iJOpGJCl7352vE+sGXQDvJ3vME94fK8EmmJlFoFzJZXvKbp93gw/HwjxXA95f7wVeWp7yn3tvxB8DEb6IdQoB6yzy8UMaZYy83PYCwEctS2hl5IB3KHo34ERMpakr3Zi3X7Q1jjjxZaMOhier3kLrcoSunQ6r+MMzqMe8mo5j9c4k4VI7swbXQt/k733ZoJfhyBbTGY22vz8POJs8d1GOlwPiO6bfARJaWx0B05aA7jW19uUOrh/aSGX60s5x4g6P88p9THI5EKVWo5yHQ8jpY/wB49qaSAtVLKnXf9WgzhdeGAR9+R5HwPjAnNA6bItDuE3zZQbHdfMa/nBSpo76wHbNLcG2xEczExytomU3ymx1H68IYRo0/hrDlqqbMwBOYj5A/feB+K8DjUqIBZqdMd4W1aKP9KEKDLcHTb8/n+UKD86A8L/DcXkmOewgvJw0ncw+aERwu2Vmop48pVgvXUhAuIh07ARxjdnjIY4k09212EPzqgCGaadmJgMk+MQsWO5CmvuesQZmEyZ5aZNQE2Avz0iZVsQDptETtzlIjzn2emlooPGGEyZbqZe9+n4wAxmmKzFcbjQr1VtdPKLnjMjtZgv8AKKvxxYTsg07q5W5XAsdfSK/juyb5CQAn0xS9rtL38U8o7aeAAX7rbhvtDxiBMnTkOrG567H12MNtMX66EHkRqPny8jFNk1BSbiEptGs3mPxiODIvcZh5GI8uQh2Kt6lT84cmUSdCvncfPaOOHknIvusw+H+0EMCnSu3TMxbMSuvRgVIsPBoANSn6rA+o++GiCpB1BBvf+8anTNSLA0/JddDlNuu0OUGLqkxWbY6N4qdG+RgLXTLntBtM1I6Ns3z19YiE3jm6ZlEvHS3alTaykgbdfxiCH+MTKqozMSbHRQelwoBiN2Wa+RSettbRj7NCFFjLLowzD5xNfEJEwd+49L/dFeZGA1Ui+1wdfj5RyWjLMpGsez3EZaSpiK1xnuD6CLutQjCMf4Vp3WXmse8bjQ7bXizysRmLyY+hhMsdux0c6Sou5lJ4QopX7Zm/Yb4GFA+NjPPH9NyEMzptoG4vxBJkKTMcL6xnGMe1SXmIlS3fxtlHzh9olpmplwRAqow1WbNciMm/5lVObSUB4EmLLgntCz2EyUVPUG4jrBl69lircNtsT8YZw1rXHQw42OLMGgt5xR6/j1ZExllye01N2LZR6CxMLyQlKuIz42SKbsvNb+vziHNYKt4qFP7TJbECdIZOpQ5wB1IsD8LwVnYxKqFDSJgdfDcf1A6j1iSeOUe0XQnF9MVHMzTIj4/wwKhGFu9qRrz6RNwmVY3O8GUYw/DpWQ/Lye6SMPn0cyScguTe3Zsut+nnDz4JV86Oallucso7Wvc25WvrG+UVFKm2M1cxU3AIuu1rnlccjBSdIRlKAgAggr9UgixBHlFKYEXas+VbK25A6Hr6W/GJNNIm5S0vOyg2JCsRfxIuL2g7xbwn9BqXlDvIRnlk/ZJIsfEEERfvYy6ilqEP/q3sf5paj/8AJjaCMh+lzLXI06lf7Q9TSTM1M2VLHK+59BGu8aUElsHLKih1SS+gG6lQ3yzRjmSM2bRZ8P4fpnUu88LKVspmMxF3IvlVQLk210iRKwXDLG9QWIBIGSYASBcDM1rX22gbkH7NS4JJqZhFrWFpaDX0vAllGUWBzX9LfnAK39hOkWeiFEJ8tUppeXMMzTHLkg6Gy2Ivr15Re+LsIly6YiWMlnVTlGW4IOmm39oyjC6ZmqZICm2ZL6XsMwuT4bxuOM0QqpRlB8gLqS1rmw5AdTGtC2ZnwvJlPMqKGYodFtMl5he2wcDpqQfjFgp+CqS/8BOvP05xZP8AhSRTS5s+VmEzKMzN9ZR9W3LXXbWAkrEjfc2jifLNph2RhagbCPWw1ekQ0xE296G3xT+b5x2hLkEv2enQfKFA0Yp/NCjguTAWJos1rsSx8dfhA44Ep1sIgUmJ97eDaVoMTOz3IqJHGBLyG3hEOptK2EHZFVobxTOJ6/vWEHju9kvy4JrQZpcbPeXfut4cuo+/xim1bak6DU6C/XleCGGzskl5rC7P3EF9LDVmPrYfGBU+bflaLIKkRwjxI01v94dwuveTNWYh2IuOTDmCPKGXjmScpzH084F7HJ1tGoUXEQadqLLyHQRa5NWGKhbXYgfGMLlYiwN7xovswqJ1TVIVQtKlXMxvqrdTlF+ZvbTzhPGuid45SlbNipyLAi9gWAA20JU36m4veHwb8wfS0MYdoGHR3+ZzD5MIkut4YPZBq0l7zJAfxyCZ8rX+UQhhlJNBEoIhNsxlgI2n2gLHnzgswYeI68/7xEqadX1ZMxH1h3Zg8iNfhGnAs8JS8pQuWQ3uragg7g8ucdSuDqMD/wAtJ88gJibLmTE1B7ZOfKYvntf5HzibImrMGZG/MeBG4PnHHAidwpIIy9mmS9ymRbXtbMARoYZk8E0oJIRbn+RRb4CDpdhyvHUupBNoykbyYMk4Ki7Io8AAPnvEuXThdgBEt3hq0aAdrLVlZGF1YEHxuIx/GJwp5syUxuUYj8j8CI2CUdYxr23UXZVkucBpPl69M6HKfXKU+EY0DOHNA58b8YYmYvf60VE1Bjn6R4xlAeAtf7U8YUVX6SP0Y8jqN8JOWosfxgrR1/j90AqpCpIjimLFgBAuJaptF6lT2ZbKCSf1pFRxmgn5jeU3Xa8aNwVQad7fxi4Ywop6WfORVLpKcrcBhfLpp5xsYULnk5MxafSkIqKjuyIA5VSVQnUqSBoQTr6wEdhuIOTsRbs1a7J2mZ7KWCgsSSQL7QFqZLs9gCXYgW5kk6Dzh9OheiIW1hqc+p6cvKHJhKg30a5Hl9r8oM8B4F9Lq0QjuLZm9DoIVJhFt9nfs4+kAT6kHJoVTr4t4eEbTh+DSqdAJaBB0AtErDKUS0AAtYQ/U+7ApfbOIVMzAuCv1r6dCBY/Ij0h4uPEekRpUy0whvrKLf4Sb/6liaII5nFx1MeMf0RDkeExoJDng7lbfzJr8RzERuzBIYHKx2Zdm8COvgfSCZPUfCI0+n3K69Rybz8fGONs9lTz7raN8j5QzPm2ZdOdvlDSTL907/VJ3v0P8w+cJ5lxY7gi8cYO5zmt4X+f9odUQgt7HwtHaDWMOHV0EZ97caDPQS5o3kzlv/S4Kn/uyRfc9zAX2h0om4XWLa9pLOPNLOP9Mcauz5mMeQv1tCYRwR7lMeQv1zhR1nFjxeWNNIj4dLHaDTnChRkuwl/iathSgKttNoPzlD08xW1BRgR1uDePIUGKXZkuMNZnA0A0HgAq2A/XOGqgfwn+srqQeYsRaPIUMYCKjjEwmfNJ5zHPxYk/MxqnsLkraa1tcwF/CFCieY5m2ptHM7aPIUaYRKhRml/1H/Q/5D4Q7ljyFGnHUIwoUaCegRCqWKsMulzChRxyIuPCyEjQ2Jv4gXB+MNO3unmQLwoUYzUTpTG0PX7sKFGmDciOccUGkqAdjJm//W0KFGM1dnylL2v5QnO/pHkKOCETChQo04//2Q=="></img>
        </div>
        </section>
      </div>
    )}
  />
)

export default MainSection
