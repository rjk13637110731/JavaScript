<script>
        // 以下都是false
        console.log(Boolean('')); // false
        console.log(Boolean(0)); // false
        console.log(Boolean(NaN)); // false
        console.log(Boolean(null)); // false
        console.log(Boolean(undefined)); // false

        // 以下都是true
        console.log(Boolean('123')); // true
        console.log(Boolean('你好吗？')); // true
        console.log(Boolean('我很好！')); // true

</script>
