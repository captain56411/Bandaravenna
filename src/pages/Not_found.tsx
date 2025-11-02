
function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "10px",
          fontWeight: "bold",
          letterSpacing: "2px"
        }}
      >
        404
      </h1>
      <h2 style={{ marginBottom: "15px" }}>Pagina non trovata</h2>
      <p style={{ maxWidth: "500px", marginBottom: "25px" }}>
        La pagina che stai cercando potrebbe essere stata rimossa,
        cambiata oppure è temporaneamente non disponibile.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "0.3s ease",
          border: "1px solid currentColor"
        }}
      >
        Torna alla Home
      </a>
    </div>
  );
}

export default NotFound;
