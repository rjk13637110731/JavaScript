<script>
        var year = prompt('请输入要检测的年份：');
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            alert(year + '是闰年！');
        } else {
            alert(year + '是平年！');
        }
</script>
