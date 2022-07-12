
import Layout from "../components/Layout";

function Home() {
    return (
        <>
        <Layout>
            {Array(30).fill(0).map((_, i) => (
                <div
                    key={i}
                    style={{
                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                        gridColumn: `span 1`,
                        gridRow: `span 1`
                    }}
                />
            ))}
        {/*<h1>Hello Home</h1>*/}
        </Layout>
        </>
    );
  }
  
  
  export default Home;