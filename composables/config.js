
const elPlusConfig = (state) => ({
    props: {
        validateEvent: false,
        error: state.errors[0],
        required: state.required,
    },
});
export default elPlusConfig