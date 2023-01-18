<script>
        //1.逻辑与&& 相当于 and 两侧都为true，结果才是true，只要有一侧为false，结果就为false
        console.log(3 > 5 && 3 > 2);//false
        console.log(3 < 5 && 3 > 2);//true

        //2.逻辑或 || or 两侧都为false，结果才是false，只要有一侧为true，结果就为true
        console.log(3 > 5 || 3 > 2);//true
        console.log(3 > 5 || 3 < 2);//false

        //3.逻辑非！not 
        console.log(!true);//false
</script>
