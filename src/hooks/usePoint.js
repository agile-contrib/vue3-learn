import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {

    let point = reactive({
        x: 0,
        y: 0
    });

    let updatePoint = event => {
        point.x = event.pageX;
        point.y = event.pageY;
    };

    onMounted(() => {
        window.addEventListener('click', updatePoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', updatePoint);
    });

    return point;

};
