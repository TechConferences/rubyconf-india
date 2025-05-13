
import { Button } from "@/components/ui/button";

const LanguageRoast = () => {
  return (
    <section id="language-roast" className="py-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-burgundy-50 text-burgundy-800 font-medium rounded-full mb-4">
            NEW FOR 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Language Roast</h2>
          <div className="w-24 h-1 bg-burgundy-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            An entertaining session where programming languages playfully critique each other.
            Fun, educational, and guaranteed to spark friendly debates!
          </p>
        </div>

        <div className="bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.808 8.88c-.792-3.644-3.618-6.052-7.23-6.88A8.06 8.06 0 0 0 12 2c-.5 0-.994.04-1.476.118-3.623.796-6.488 3.25-7.216 6.937-.087.45-.125.9-.109 1.345l.024.329c.014.175.032.35.054.525a7.014 7.014 0 0 0 3.645 5.121l-.87 3.132a.5.5 0 0 0 .723.582l2.762-1.579c.59.207 1.206.37 1.843.483A8.06 8.06 0 0 0 12 22a8.06 8.06 0 0 0 1.618-.162 7.956 7.956 0 0 0 3.375-1.339 7.943 7.943 0 0 0 2.937-4.432c.088-.345.154-.698.194-1.056a8.599 8.599 0 0 0 .055-1.76 7.965 7.965 0 0 0-.082-.771c-.036-.222-.077-.444-.125-.659a7.956 7.956 0 0 0-.613-1.854l1.294-.744a.5.5 0 0 0 .168-.757l-.729-1.093a.504.504 0 0 0-.717-.144L17.4 10.175a7.968 7.968 0 0 0-4.138-2.5V7a.5.5 0 0 0-1 0v.943a7.975 7.975 0 0 0-3.499 1.64l-1.17-.78a.504.504 0 0 0-.691.173l-.597 1.044a.5.5 0 0 0 .199.73l1.4.7a7.978 7.978 0 0 0 .356 4.76 7.951 7.951 0 0 0 3.81 3.925v1.108a.5.5 0 0 0 1 0v-1.305c.245.043.494.076.747.097A8.06 8.06 0 0 0 12 20a8.06 8.06 0 0 0 1.618-.162c.274-.055.54-.124.8-.206v1.211a.5.5 0 0 0 1 0v-1.559a7.954 7.954 0 0 0 3.072-1.497l1.261.841a.504.504 0 0 0 .717-.144l.503-1.204a.5.5 0 0 0-.198-.676l-1.83-.913a7.969 7.969 0 0 0 .739-2.397l1.849-.37a.5.5 0 0 0 .394-.59l-.28-1.348a.503.503 0 0 0-.605-.38l-1.83.366a8.002 8.002 0 0 0-.443-1.428c-.166-.39-.36-.765-.58-1.123l1.284-.739a.5.5 0 0 0 .168-.757l-.729-1.093a.504.504 0 0 0-.717-.144l-1.25.833a7.98 7.98 0 0 0-1.545-1.526c.315.386.594.8.832 1.241z"></path>
            </svg>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="z-10">
              <h3 className="text-2xl font-bold mb-4">The Ultimate Programming Language Showdown</h3>
              <p className="mb-6 opacity-90">
                Join us for a spirited and entertaining session where advocates of Ruby, JavaScript,
                and Python engage in a friendly "roast" of each other's languages. Expect witty banter, 
                technical critiques, and surprising revelations!
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-lg p-5 mb-6">
                <h4 className="font-bold mb-3">What to expect:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-burgundy-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      Lively debates about syntax, performance, and community
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-burgundy-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      Humorous memes and code comparisons
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-burgundy-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      Audience participation and live polls
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-burgundy-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      Surprise special guests
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="bg-white text-burgundy-800 hover:bg-burgundy-50">
                  Reserve Your Seat
                </Button>
                <div className="text-sm opacity-80">
                  Day 1 • 3:00 PM - 4:30 PM
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 shadow-lg transform -rotate-3">
                <div className="aspect-square w-full bg-red-100 rounded flex items-center justify-center mb-3">
                  <svg viewBox="0 0 32 32" className="text-burgundy-700 w-12 h-12" fill="currentColor">
                    <path d="M27.758,6.741a16.035,16.035,0,0,1,1.51,5.753c.106.907,1.294,13.252-.524,14.431-1.6,1.04-10.907,2.673-14.208.379-1.8-1.251-3.644-12.219-3.644-12.219.6-4.3.969-5.746,1.115-6.38a9.222,9.222,0,0,1,1.85-3.646c1.229-1.568,1.966-1.9,2.121-2A12.253,12.253,0,0,1,19.8,2.089a16.326,16.326,0,0,1,7.076,3.748c.429.406.618.6.883.9" />
                    <path d="M17.415,17.811s-.218.293-.621.293c-.587,0-.618-.483-.618-.546a4.486,4.486,0,0,1,.166-1.114c.063-.179,1.732-5.36,1.792-5.469.073-.136.19-.387.627-.387.483,0,.593.239.593.5,0,.165-.39.263-.106.512-.053.2-1.708,5.67-1.833,6.212" />
                    <path d="M25.034,16.276s-.29.309-.727.309c-.469,0-.552-.4-.552-.494a3.687,3.687,0,0,1,.093-.7c.087-.331,1.235-3.5,1.235-3.5s.176-.525.716-.525c.475,0,.564.234.564.436a2.636,2.636,0,0,1-.106.557c-.058.217-1.168,3.8-1.223,3.912" />
                    <path d="M23.243,19.371s-.309.381-.821.381c-.4,0-.56-.229-.56-.449a2.12,2.12,0,0,1,.111-.582c.082-.277.879-2.293.879-2.293s.229-.552.777-.552c.565,0,.659.362.659.557a1.878,1.878,0,0,1-.116.548,16.115,16.115,0,0,1-.929,2.39" />
                  </svg>
                </div>
                <div className="text-center text-gray-800">
                  <div className="font-bold">Ruby</div>
                  <div className="text-xs text-gray-500">The elegant one</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-lg transform rotate-2 translate-y-4">
                <div className="aspect-square w-full bg-yellow-100 rounded flex items-center justify-center mb-3">
                  <svg viewBox="0 0 32 32" className="text-yellow-500 w-12 h-12" fill="currentColor">
                    <path d="M2,16a14,14,0,0,0,28,0A14,14,0,0,0,2,16Zm10-.5V7.5c0-.28.34-.43.54-.24l7,7a.25.25,0,0,1,0,.35l-7,7a.33.33,0,0,1-.54-.24Z"/>
                  </svg>
                </div>
                <div className="text-center text-gray-800">
                  <div className="font-bold">JavaScript</div>
                  <div className="text-xs text-gray-500">The flexible one</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-lg transform -rotate-2 translate-y-2">
                <div className="aspect-square w-full bg-blue-100 rounded flex items-center justify-center mb-3">
                  <svg viewBox="0 0 32 32" className="text-blue-600 w-12 h-12" fill="currentColor">
                    <path d="M13.587 2s-9.737 4.374-10.599 4.771c-.862.398-.69 1.11-.69 1.11v14.414s-.101.831.403 1.094c.504.262 10.442 4.335 10.442 4.335s.862.358 1.428 0c.566-.358 10.486-4.372 10.486-4.372s.555-.215.61-.887c.055-.672 0-15.075 0-15.075s.191-.829-.363-1.149c-.554-.32-10.206-4.219-10.206-4.219s-.672-.396-1.511-.022zm.006 2.89c.58-.013 1.069.184 1.069.184s7.701 3.231 8.099 3.501c.397.27.351.397.351.397v11.491s-.02.339-.443.59c-.423.25-8.204 3.501-8.204 3.501s-.522.25-1.085 0-8.107-3.394-8.107-3.394-.454-.236-.454-.708V9.012s-.045-.499.443-.784c.488-.285 7.4-3.152 7.4-3.152s.352-.173.931-.186zm.856 5.752c-1.98.008-3.995.352-5.335.935-2.509 1.097-2.941 2.457-2.941 2.789s.437 1.664 2.941 2.761c2.555 1.118 6.86 1.235 9.106.288 2.598-1.097 2.972-2.444 2.972-2.822 0-.379-.397-1.719-2.972-2.816-1.304-.557-2.72-.828-3.771-.135zm-5.208 1.665s1.06-.498 2.831-.498c1.772 0 2.967.463 2.967.463s.874.344.025 1.009c-.85.665-2.06 1.168-2.992 1.168-.932 0-2.941-.422-2.941-1.118 0-.695.11-1.024.11-1.024zm10.574.135a.9.9 0 0 1 .498.14c.397.243.363.603.363.603-.06 1.545-.897 2.444-2.408 3.231-.026 0-1.833.831-4.34.831s-4.315-.831-4.315-.831c-.455-.213-1.089-.544-1.089-1.319v-3.44s.408.819 3.147 1.545c2.74.727 5.479.498 7.704-.458l.44-.302zm-.213 2.13v1.354c0 .498-.822.883-1.795 1.206-1.564.514-3.134.308-3.063.25.84-.676 1.112-.93 2.636-1.082 1.16-.116 1.984-.498 2.222-.728z"/>
                  </svg>
                </div>
                <div className="text-center text-gray-800">
                  <div className="font-bold">Python</div>
                  <div className="text-xs text-gray-500">The readable one</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageRoast;
