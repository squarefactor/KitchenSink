/**
 * Appcelerator Titanium Mobile
 * This is generated code. Do not modify. Your changes will be lost.
 * Generated code is Copyright (c) 2009 by Appcelerator, Inc.
 * All Rights Reserved.
 */
#import <Foundation/Foundation.h>

@protocol TitaniumAppAssetResolver
- (NSData*) resolveAppAsset:(NSURL*)url;
- (oneway void)release;
- (id)retain;
@end

@interface ApplicationRouting : NSObject<TitaniumAppAssetResolver> {
}
- (NSData*) resolveAppAsset:(NSURL*)url;
- (NSData*) pageNamedAbout;
- (NSData*) pageNamedImage;
- (NSData*) styleNamedIndex;
- (NSData*) pageNamedIndex;
- (NSData*) pageNamedIndex2;
- (NSData*) pageNamedSystem_props;
- (NSData*) pageNamedWindow_test1;
- (NSData*) pageNamedWindow_test2;
- (NSData*) scriptNamedJs_index;
- (NSData*) scriptNamedJs_index2;
- (NSData*) styleNamedTiui_css_tiui;
- (NSData*) scriptNamedTiui_js_tiui;

@end
