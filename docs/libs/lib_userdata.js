var v_lib_userdata_manifest = function(v_libRegData) {
	C$common$registerLibraryFunction('userdata', v_libRegData, "getProjectSandboxDirectory", 1);
};

var v_lib_userdata_function_getProjectSandboxDirectory = function(v_args) {
	var v_output = v_VALUE_NULL;
	var v_arg1 = v_args[0];
	var v_string1 = v_arg1[1];
	var v_string2 = '/' + v_string1;;
	v_output = v_buildString(v_string2);
	return v_output;
};

C$common$scrapeLibFuncNames('userdata');
