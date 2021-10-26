

export default {
    get: jest.fn().mockResolvedValue({data: {}})}


    // React will fail this test
    // because by default the Mock is reset every time
    // go to nodemodules > react-scripts > scripts > utils  createJestConfig.js
    // line 69 "resetMocks: false,"

    // but also try 
//   According to the official document(Manual Mocks), 
// the mock should be placed in the _mocks_ directory adjacent to node_modules
// (unless you configured roots to point to a folder other than the project root). 
// Then the mock test will not fail. 
// Another way is  inserting this directly. 
// ex)
// jest.mock("axios");
// axios.get.mockResolvedValue(mockResponse);