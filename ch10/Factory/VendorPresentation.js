/**
 * Created by arahansa on 2017-01-15.
 */
var Conference = Conference || {};

Conference.VendorPresenation = function(title, presenter, vendor, product){
    'use strict';

    if(!(this instanceof Conference.VendorPresenation)){
        throw new Error(Conference.VendorPresenation.messages.mustUseNew);
    }
    if(!title){
        throw new Error(Conference.VendorPresenation.messages.vendorRequired);
    }

    Conference.Presentation.call(this, title, presenter);
    this.vendor = vendor;
    this.product = product;
};

Conference.VendorPresenation.prototype = Object.create(Conference.Presentation.prototype);
Conference.VendorPresenation.messages = {
    mustUseNew : 'VendorPresenation 은 반드시 "new" 로 생성해야 합니다."',
    vendorRequired : 'vendor은 필수 입력 항목입니다'
}



