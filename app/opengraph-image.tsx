import { ImageResponse } from "next/og";

import { company } from "@/lib/data";

export const runtime = "edge";
export const alt = `${company.name} | Injection diesel au Cameroun`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #071015 10%, #0B5FFF 58%, #14A06F 100%)",
          color: "white",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.16), transparent 30%), radial-gradient(circle at bottom right, rgba(255,255,255,0.12), transparent 24%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 36,
            borderRadius: 34,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(7,16,21,0.42)"
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 70px",
            width: "100%",
            height: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 74,
                height: 74,
                borderRadius: 24,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "0.06em"
              }}
            >
              SEF
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8FE7C4"
                }}
              >
                Injection diesel
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  color: "rgba(255,255,255,0.8)"
                }}
              >
                Yaoundé • Douala • Cameroun
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 860
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 74,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.04em"
              }}
            >
              Réparation de pompes et injecteurs diesel au Cameroun
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.82)"
              }}
            >
              Diagnostic fiable, intervention technique, reprogrammation et contact
              WhatsApp direct pour véhicules de tourisme, utilitaires, camions et
              engins.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14
              }}
            >
              {["Garantie assurée", "Expertise technique", "WhatsApp direct"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "14px 22px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    fontSize: 22
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "rgba(255,255,255,0.76)"
              }}
            >
              {company.name}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
