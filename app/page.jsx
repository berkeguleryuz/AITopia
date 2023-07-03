import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='green_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      AITopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
    <p className="desc text-center">You need to login to create a prompt.
      Login & Share
    </p>

    <Feed />
  </section>
);

export default Home;
